---
lastUpdated: true
contributors : true
---
# WEIGHT-communication

## Open

| Command        | Sample                                                         |
| ----------- | ------------------------------------------------------------ |
| weight_open | {    "Params": {},    "ID": "XXXXXXXXX",    "Action": "weight_open"  } |

Input:none

Return: Asynchronous callback (it will be called back to the client only when the device returns data)

| Sample                                                         |
| ------------------------------------------------------------ |
| {      "errCode": 0,  "errText":  "",  "params": {   "Source": “weight”,    "Result": 3.14  },      "ID": "xxxxxxx",      "Action": "weight_callback"  } |

## Close

| Command         | 例子                                                         |
| ------------ | ------------------------------------------------------------ |
| weight_close | {    "Params": {},    "ID": "XXXXXXXXX",    "Action": "weight_close"  } |

Input:none

Return:none