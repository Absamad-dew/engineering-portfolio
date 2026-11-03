"""Serve an extracted walkthrough on loopback, restricted to its file manifest."""
import argparse
import functools
import hashlib
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
from pathlib import Path
from urllib.parse import unquote, urlsplit


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=8987)
    args = parser.parse_args()
    root = Path(__file__).resolve().parent
    manifest = json.loads((root / "manifest.json").read_text(encoding="utf-8"))
    allowed = {"manifest.json"}
    for record in manifest["files"]:
        name = record["path"]
        path = (root / name).resolve()
        if root not in path.parents or hashlib.sha256(path.read_bytes()).hexdigest() != record["sha256"]:
            raise SystemExit("Walkthrough file failed verification: " + name)
        allowed.add(name)

    class Handler(SimpleHTTPRequestHandler):
        def do_GET(self):
            name = unquote(urlsplit(self.path).path).lstrip("/")
            if not name or name.endswith("/"):
                name += "index.html"
            if name not in allowed:
                self.send_error(404)
                return
            self.path = "/" + name
            super().do_GET()

        def do_HEAD(self):
            self.send_error(405)

    server = ThreadingHTTPServer(("127.0.0.1", args.port), functools.partial(Handler, directory=str(root)))
    print("Open http://127.0.0.1:" + str(server.server_address[1]) + "/demos/")
    print("Local walkthrough only. Press Ctrl+C to stop.", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
