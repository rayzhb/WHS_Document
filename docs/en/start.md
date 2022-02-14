---
lastUpdated: true
contributors : true
---

# Introduction

The purpose of WHS is to make the hardware operation easier. Plug in loading various subroutines.

The use of websocket duplex communication enables the applications of web, pad, mobile and desktop to access the hardware, and also simplifies the interface of hardware access

## How does it work

View[ProgramDirectoryStructure](./guide.md#main-program-directory-structure)。

Whs belongs to the main program, and the development of all plug-ins is saved in the **Plugins** folder

## Install plug-in template

There are 2 batch files in the program directory

1. InstallTemplate. bat

2. UninstallTemplate. bat

Double click installtemplate Bat, after successful installation. have access to

```cmd

dotnet new -l

```

Check whether the installation is successful. There will be a template named: **whs5**

As shown in the figure:

![install plug-in template](/images/start_templatelist.png)

# Get started quickly

## Rapid development plug-in

### Step 1

Enter the **Plugins** folder and use the following command

```cmd

dotnet new WHS5 -n WHS. HelloWord -D WHS. HelloWord -M rayzhb

```
::: tip
-N namespace

-Display name of D plug-in (it will be replaced in multiple languages)

-M developer
:::

### Step 2

Whs Helloword, add plugins under the solution

Click WHS Helloword build will find compilation errors.

Enter deviceplugindefinition CS [PluginDirectoryStructure](./guide.md#plug-in-directory-structure)

```cs

public override Guid Id
{
    get
        {
        //Generate a guid as follows
        //return new Guid("xxxxxxxxxxxxxxxxxxx");
        }
    }
}
```

Compiled successfully after modification

### Step 3

After running the program, the name of the plug-in is not WHS Helloword, this is because [multilingual](./guide.Md#multilingual) has changed the name.

You can modify the value corresponding to plugindisplaytext in the Resources folder in the plug-in

Finished