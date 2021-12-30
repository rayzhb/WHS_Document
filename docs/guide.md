---
lastUpdated: true
contributors : true
---
# 指南
## 主程序目录结构
```
├─ Core
│  ├─ WHS.Infrastructure
│  └─ WPFLocalizeExtension
├─ Document
│  └─WHSDocumentation
├─ Plugins
│  ├─ WHS.App.Animation
│  ├─ WHS.DEVICE.AUDIO
│  ├─ WHS.DEVICE.MAPDESIGN
│  ├─ WHS.DEVICE.ROBOT3D
│  ├─ WHS.DEVICE.ROBOTNEW
│  ├─ WHS.DEVICE.SIGNATURE
│  └─ WHS.DEVICE.WEIGHT
├─ Setup
│  ├─ WHS_CustomAction
│  └─ WHSSetup
├─ Templates
│  └─ WHSPlugin5
│  └─  └─ WHSPlugin5
└─ WHS
```
### 环境

    程序环境：.net5.0-windows

### 贡献

1.WPF框架 : MahApps.Metro  [参考](https://github.com/MahApps/MahApps.Metro)

2.MVVM：Caliburn.Micro [参考](https://caliburnmicro.com/documentation/)

3.日志：NLOG   [参考](https://github.com/NLog/NLog)

4.通信：DotNetty.Transport.Libuv  [参考](https://github.com/Azure/DotNetty)

5.ICON：MahApps.Metro.IconPacks.FontAwesome   [参考](https://github.com/MahApps/MahApps.Metro.IconPacks)

6.弹性和瞬态故障处理库:Polly [参考](https://github.com/App-vNext/Polly)

7.文档工具：Sandcastle   [参考](https://github.com/EWSoftware/SHFB)

8.打包工具：WIX   [参考](https://wixtoolset.org/)

## 插件目录结构

```
├─ Properties
│  └─ Resource.resx //Images的图片加入到资源
├─ Actions
│  └─ActionDemo.cs  //websocket发来执行命令
├─ Images
│  └─plugin.png
├─ Model
│  └─ActionModel.cs //模型
├─ Resources
│  ├─ Strings.en.resx  //语言EN
│  ├─ Strings.resx     //语言默认中文
│  └─ Strings.zh-CN.resx  //语言中文
├─ ViewModels     //MVVM：DeviceView
│  └─ DeviceViewModel.cs
├─ Views          //视图
│  ├─ DeviceView.cs
│  └─ DeviceView.xaml
├─ DevicePluginDefinition.cs //插件配置
└─ plugin.def       //插件定义
```

## 多语言

### 主程序多语言

在WHS程序集的Resouces文件夹下添加一个语言资源，系统会自动识别出语言所属的culture

推荐在VS中安装一个插件[ResXResourceManager](https://github.com/dotnet/ResXResourceManager)

如图：
![主程序多语言](/images/guide_rex.png)


### 插件多语言

    当主程序添加了一个语言后，插件也需要添加相应的语言资源。
    同时在编译后命令把插件生成的语言文件夹COPY到主程序的Plugins文件夹中
    如图：

![插件多语言](/images/guide_language.jpg)

```
mkdir $(SolutionDir)$(OutDir)Plugins\xx-pluginname-xx\xx-languageName-xx
xcopy  /y /s /e  "$(TargetDir)xx-languageName-xx" "$(SolutionDir)$(OutDir)Plugins\xx-pluginname-xx\xx-languageName-xx\"
```

::: tip

xx-pluginname-xx  插件目录

xx-languageName-xx  语言名称如：zh-CN,en

:::

## 视图

View继承Page,这是因为主窗体使用的是**Frame**组件对插件的导航

``` cs
/// <summary>
    /// DeviceView.xaml 的交互逻辑
    /// </summary>
    public partial class DeviceView : Page
    {
        public DeviceView()
        {
            InitializeComponent();
        }
```

### 传统开发

对于传统使用winform 或者WPF开发的同学，可以按照传统的方式开发

### MVVM方式开发

由于使用了[Caliburn.Micro](https://caliburnmicro.com/documentation/).
试图会根据名称自动找到相应的viewmodel.

xxView>>>>>>xxViewModel

├─ ViewModels    
│  └─ DeviceViewModel.cs
├─ Views          
│  ├─ DeviceView.cs
│  └─ DeviceView.xaml


## 命令

### 为什么程序中要使用命令？

主程序引入了DotNetty,并默认开启了18080端口作为websocket以及http。

当插件开发好后，尤其当我们开发的插件是硬件方便的时候，

我们希望用户能通过WEB,或者其他程序，使用统一的规则来访问我们的插件。

### 命令传输模型-Request
全局发送格式：（REQUEST）
```json
{
    "Params": {}, 
    "ID": "xxxxxxx", 
    "Action": "命令"  
}
```

::: tip

Params:根据不同的命令传入不同的对象OBJECT类型

ID：string 类型
    客户端发起命令的一个唯一凭据（存在多个命令同时发起）。
    返回的时候由于硬件服务是异步返回，根据发起的命令返回相应的ID，
    这样客户端知道是哪一个命令的返回。

Action: string类型
:::

### 命令传输模型-Response

全局返回格式：（RESPONSE,CALLBACK）
```json
{
    "errCode": 0, 
    "errText": "",
    "params": {  
        "Source": “”,
        "Result": {}
    }, 
    "ID": "xxxxxxx",
    "Action": "命令" 
}
```
::: tip

errCode: 为0的时候意味存在错误，可以查看errText

Params:如果没有返回值，此节点可能为 null
        Source:来源设备。
        Result：根据不同的命令返回不同的对象OBJECT类型。


ID：Request传来的ID

Action: **RESPONSE**会根据**REQUEST**照样返回。
        **CALLBACK**会不一样相当于服务端主动发送消息给客户端。

:::
### 命令的执行方式?


命令返回都是**异步方式**

### 自测工具

用户可以在程序里面点击关于->WHS WEB Test

    如图：

![插件多语言](/images/guide_webtest.png)

## 高级