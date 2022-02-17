---
lastUpdated: true
contributors : true
---
# AUDIO-communication

## Play Sound

| Comannd       | Sample                                                         |
| ---------- | ------------------------------------------------------------ |
| Play_Voice | {"Params":{"Type":"PlayOK","Index":0},"ID":"XXXXXXXXX","Action":"Play_Voice"} |

Input parameters：

| Field  | Type   | Remarks                                                       |
| ----- | ------ | ------------------------------------------------------------ |
| Type  | string | Enum:"PlayOK"，"PlayCancel"，"PlayMsg"，"PlayError"，"ScanError"，"PlaySucces"，"PlayIndex" |
| Index | Int    | if the input of Type is "PlayIndex" then the index need to set a value                     |