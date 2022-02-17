---
lastUpdated: true
contributors : true
---

# AGV-communication
Combined with [map designer](./agvmapdesign.md) plug-in
## 1.agv_register:

register channel

Request->Response

```json
{"Params": 
{"UserName":"admin","Password":"123456"},
"ID": "1","Action": "agv_register"}
```

| Field    | Description    | Type    | Remarks |
| -------- | ------ | ------ | ---- |
| UserName | UserName | string |      |
| Password | Password   | string |      |

## ~~2.agv_move_new:~~

Control AGV movement

Request->Response
```json
{"Params": 
{"command":1,"row":4,"column":2,"floor":1,"code":"AGV001"},
"ID": "1","Action": "agv_move_new"}
```

| Field    | Description       | Type   | Remarks                                                         |
| ------- | ---------- | ------ | :----------------------------------------------------------- |
| command | command       | int    | left = 1<br/>right= 2<br/>up=3<br/>down=4<br/>move=5<br/>rotate=6<br/>charge=7<br/>change_floor=8 |
| row     | row         | int    |                                                              |
| column  | column         | int    |                                                              |
| floor   | floor       | int    |                                                              |
| code    | agv code | string |                                                              |

## 3.agv_map:

get floor map information

Request->Response
```json
{"Params": {"Floor":1},
"ID": "1","Action": "agv_map"}
```

| Field  | Description | Type | Remarks |
| ----- | ---- | ---- | ---- |
| Floor | Floor | int  |      |
## 4.agv_allcars:

Get all agv information

:Request->Response
```json
{"Params": {},"ID": "1",
"Action": "agv_allcars"}
```

## 5.agv_move:（callback）

This command is actively sent by the server to the clien **(server->client)**

callback

Return Data Structure:

```json
{"errCode":0,"errText":"",
"params":{"Source":"ControlCommand",
"Result":{"code":"AGV002","command":4,
"floor":1,"startPoint":"106.25,256.25",
"endPoint":"106.25,306.25","distance":1.0,
"power":"99"}},
"ID":"edea4852-7c0e-405e-97d4-6f308fec71bc",
"Action":"agv_move"}
```

| Field       | Description        | Type   | Remarks                                                         |
| ---------- | ----------- | ------ | ------------------------------------------------------------ |
| code       | AGV  CODE     | string |                                                              |
| command    | AGV COMMAND | int    | left = 1<br/>right= 2<br/>up=3<br/>down=4<br/>move=5<br/>rotate=6<br/>charge=7<br/>change_floor=8 |
| floor      | floor        | int    |                                                              |
| startPoint | startPoint      | point  |                            |
| endPoint   | endPoint      | point  |                             |
| distance   | distance    | double | seconds                             |
| power      | power        | float  |                                                 |