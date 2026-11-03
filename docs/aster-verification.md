# Aster: verification behind the product walkthrough

The [Aster case](../projects/aster.md) presents business behavior and actual application captures. The figures below refer to the retained **0.55.0** verification, build `122e6f02e626fe68`; screenshots show the earlier **0.54** presentation interface.

## End-to-end observations

| Observation | Recorded result |
|---|---|
| Existing presentation conversations completed and read back through the authorized API | 40 of 40 |
| Inbound text steps | 111 |
| Actual isolated model response | Present in every conversation |
| New orders | 9 |
| Invoices | 11: 9 issued, 2 voided with unpaid-order cancellations |
| New bookings | 5: 3 rescheduled and confirmed, 2 cancelled |
| Exceptional discount/refund requests | 4 separate staff tasks |
| Explicit local bank events | 3; an already-paid invoice was not paid again |
| Intermediate failed turns | 7 retained in the conversation history |

The run recorded 123 provider returns, including discarded and empty responses. Of the sent turns, 62 contained accepted model text; other turns could be typed calculations, confirmations or rules. Neither 123 nor 62 is a count of sales or independently model-generated business decisions.

Final business records were checked through the authorized API. A successful continuation did not erase earlier failures or contradictory answers. An invoice already handed to a channel did not acquire a new delivery claim without a new receipt.

## Interface and regression scope

The customer interface and report were checked at 1,200 and 390 pixels: selected customer, preserved history, the two-layout 7,000 RUB order, matching invoice, message composer and absence of horizontal overflow. These interface checks are separate from model-response quality.

The retained regression record reports **1,208 passing Python tests, one skip and 127 passing Node groups**. The first time-limited Python run was incomplete and not counted; the subsequent complete run retained its assertions. These are checks of the named private build, rather than public reproducibility or production adoption claims.

## Demonstration boundary

The application ran locally with synthetic business records. External business channels and bank events were local adapters. No real customer, payment charge or physical microphone participated. Fresh installation of an archived copy was outside this verification set. Source code, runtime databases and raw provider requests remain private.

[Evidence and media provenance](evidence.md) · [Aster walkthrough](../projects/aster.md)
