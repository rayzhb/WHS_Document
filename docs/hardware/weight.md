---
lastUpdated: true
contributors : true
---
# 电子秤插件-通信接口

##  打开电子秤

| 命令        | 例子                                                         |
| ----------- | ------------------------------------------------------------ |
| weight_open | {    "Params": {},    "ID": "XXXXXXXXX",    "Action": "weight_open"  } |

传入参数：无

返回参数：异步回调（当电子秤返回数据的时候才会回调到客户端）

| 例子                                                         |
| ------------------------------------------------------------ |
| {      "errCode": 0,  "errText":  "",  "params": {   "Source": “weight”,    "Result": 3.14  },      "ID": "xxxxxxx",      "Action": "weight_callback"  } |

 

 

##  关闭电子秤

| 命令         | 例子                                                         |
| ------------ | ------------------------------------------------------------ |
| weight_close | {    "Params": {},    "ID": "XXXXXXXXX",    "Action": "weight_close"  } |

传入参数：无

返回参数：