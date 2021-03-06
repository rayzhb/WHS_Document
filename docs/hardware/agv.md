---
lastUpdated: true
contributors : true
---

# 仿真机器人插件-通信接口
结合地图设计器插件联合使用
## 1.agv_register:

说明:注册信道

方式:Request->Response

```json
{"Params": 
{"UserName":"admin","Password":"123456"},
"ID": "1","Action": "agv_register"}
```

| 字段     | 说明   | 类型   | 备注 |
| -------- | ------ | ------ | ---- |
| UserName | 用户名 | string |      |
| Password | 密码   | string |      |

## ~~2.agv_move_new:~~

说明:控制小车移动

方式:Request->Response
```json
{"Params": 
{"command":1,"row":4,"column":2,"floor":1,"code":"AGV001"},
"ID": "1","Action": "agv_move_new"}
```

| 字段    | 说明       | 类型   | 备注                                                         |
| ------- | ---------- | ------ | :----------------------------------------------------------- |
| command | 命令       | int    | left = 1<br/>right= 2<br/>up=3<br/>down=4<br/>move=5<br/>rotate=6<br/>charge=7<br/>change_floor=8 |
| row     | 行         | int    |                                                              |
| column  | 列         | int    |                                                              |
| floor   | 楼层       | int    |                                                              |
| code    | 机器人编码 | string |                                                              |

## 3.agv_map:

说明:获取楼层地图信息

方式:Request->Response
```json
{"Params": {"Floor":1},
"ID": "1","Action": "agv_map"}
```

| 字段  | 说明 | 类型 | 备注 |
| ----- | ---- | ---- | ---- |
| Floor | 楼层 | int  |      |
## 4.agv_allcars:

说明:获取所有小车信息

方式:Request->Response
```json
{"Params": {},"ID": "1",
"Action": "agv_allcars"}
```

## 5.agv_move:（callback）

说明:本命令有服务端主动发送给客户端 **(server->client)**


方式:callback

返回数据结构:

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

| 字段       | 说明        | 类型   | 备注                                                         |
| ---------- | ----------- | ------ | ------------------------------------------------------------ |
| code       | AGV编码     | string |                                                              |
| command    | AGV操作命令 | int    | left = 1<br/>right= 2<br/>up=3<br/>down=4<br/>move=5<br/>rotate=6<br/>charge=7<br/>change_floor=8 |
| floor      | 楼层        | int    |                                                              |
| startPoint | 起始点      | point  | canvas体系中的坐标<br>left,top                               |
| endPoint   | 结束点      | point  | canvas体系中的坐标<br>left,top                               |
| distance   | 线段距离    | double | 距离代表小车运行时间(单位：秒)                               |
| power      | 电量        | float  | 小数位：一位                                                 |


