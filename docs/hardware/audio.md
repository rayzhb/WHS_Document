---
lastUpdated: true
contributors : true
---
 # 声音插件-通信接口

## 播放声音

| 命令       | 例子                                                         |
| ---------- | ------------------------------------------------------------ |
| Play_Voice | {"Params":{"Type":"PlayOK","Index":0},"ID":"XXXXXXXXX","Action":"Play_Voice"} |

传入参数：

| 参数  | 类型   | 字段名                                                       |
| ----- | ------ | ------------------------------------------------------------ |
| Type  | string | 类型:"PlayOK"，"PlayCancel"，"PlayMsg"，"PlayError"，"ScanError"，"PlaySucces"，"PlayIndex"     计数扫描 |
| Index | Int    | "PlayOK"计数扫描次数                                         |