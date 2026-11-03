"""Build an allowlisted static/offline walkthrough from public portfolio files.

No application build, model call or research implementation is involved.
Run from any directory: python scripts/build_demo.py --output <new-directory>
"""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import zipfile

ROOT = Path(__file__).resolve().parents[1]
DEMO_FILES = [
    "index.html", "styles.css", "app.js", "logic.js", "icon.svg",
    "data/research.json", "data/corebroker.json", "data/video.json",
    "research-notes.md", "corebroker-notes.md", "README.md",
]
MEDIA_FILES = ["aster-chat.png", "aster-order-invoice.png", "aster-workspace.png"]


def bundled_data():
    data = {name: json.loads((ROOT / "demos" / "data" / (name + ".json")).read_text(encoding="utf-8"))
            for name in ("research", "corebroker", "video")}
    # Escape HTML terminators even though the bundle is loaded as an external script.
    return "window.PORTFOLIO_EVIDENCE = " + json.dumps(data, ensure_ascii=False, indent=2).replace("</", "<\\/") + ";\n"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    output = args.output.resolve()
    if output.exists():
        raise SystemExit("Choose a new output directory; this builder never deletes an existing tree.")
    if output == ROOT or ROOT in output.parents and ".git" in output.parts:
        raise SystemExit("Refusing an unsafe output location.")
    bundle = bundled_data()
    (ROOT / "demos" / "data.js").write_text(bundle, encoding="utf-8", newline="\n")
    for name in DEMO_FILES + ["data.js"]:
        source = ROOT / "demos" / name
        destination = output / "demos" / name
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(source.read_text(encoding="utf-8"), encoding="utf-8", newline="\n")
    for name in MEDIA_FILES:
        destination = output / "media" / name
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(ROOT / "media" / name, destination)
    (output / "index.html").write_text(
        '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        '<meta http-equiv="refresh" content="0;url=demos/index.html"><title>Engineering walkthrough</title>'
        '<p><a href="demos/index.html">Open the interactive engineering walkthrough / Открыть интерактивный обзор</a></p></html>\n',
        encoding="utf-8", newline="\n")
    (output / "NOTICE.md").write_text((ROOT / "NOTICE.md").read_text(encoding="utf-8"), encoding="utf-8", newline="\n")
    (output / "serve.py").write_text((ROOT / "scripts" / "serve_demo.py").read_text(encoding="utf-8"), encoding="utf-8", newline="\n")
    (output / "START_HERE.txt").write_text(
        "OFFLINE WALKTHROUGH / ИНТЕРАКТИВНЫЙ ОБЗОР\n\n"
        "Extract the whole archive. In this folder run: python serve.py\n"
        "Open http://127.0.0.1:8987/demos/ in your browser. Stop with Ctrl+C.\n"
        "Python 3.11+; no pip packages, login, models or API keys.\n"
        "The server listens only on this computer and serves manifest-listed files.\n\n"
        "Распакуйте архив целиком. В этой папке выполните: python serve.py\n"
        "Откройте http://127.0.0.1:8987/demos/ . Остановка: Ctrl+C.\n"
        "Python 3.11+, без установки пакетов, моделей и API-ключей.\n",
        encoding="utf-8", newline="\n")
    files = []
    for path in sorted(output.rglob("*"), key=lambda p: p.relative_to(output).as_posix()):
        if path.is_file():
            content = path.read_bytes()
            files.append({"path": path.relative_to(output).as_posix(), "bytes": len(content),
                          "sha256": hashlib.sha256(content).hexdigest()})
    manifest = {"schema_version": 1, "kind": "public interactive walkthrough",
                "contains_private_application_implementation": False,
                "contains_research_implementation": False, "files": files}
    (output / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8", newline="\n")
    archive = output.parent / "engineering-walkthrough-offline.zip"
    if archive.exists():
        raise SystemExit("Archive already exists; choose another parent directory.")
    with zipfile.ZipFile(archive, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as bundle_zip:
        for path in sorted(output.rglob("*"), key=lambda p: p.relative_to(output).as_posix()):
            if path.is_file():
                entry = zipfile.ZipInfo(path.relative_to(output).as_posix(), date_time=(2026, 11, 3, 0, 0, 0))
                entry.compress_type = zipfile.ZIP_DEFLATED
                entry.create_system = 3  # Stable Unix file metadata on Windows and Linux.
                entry.external_attr = 0o100644 << 16
                bundle_zip.writestr(entry, path.read_bytes())
    print(json.dumps({"site": str(output), "files": len(files) + 1, "archive": str(archive),
                      "archive_bytes": archive.stat().st_size,
                      "archive_sha256": hashlib.sha256(archive.read_bytes()).hexdigest()}, indent=2))


if __name__ == "__main__":
    main()
