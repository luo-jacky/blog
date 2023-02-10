# **注册ChatGPT详细指南**

**最近ChatGPT真受欢迎，但是有些人注册时会经常面临不服务它们的地区问题，现在我们给你详细问题解决。**

## **准备**

1. 代理。要求是韩国，日本，印度，新加坡，美国这些国家的地址都合适。对其他的我们还不太清楚，反正香港或中国的代理肯定不行。

2. 找一个国外手机号码，如果你没有用过接码平台也行，有些接码平台是无法接的，所以我们推荐一个就是 sms-activate.org

3. 准备一个浏览器

## 开始一步一步注册

### **第一步是接验证码**

打开接码平台 [sms-activate.org](https://sms-activate.org/?ref=2068197)，注册一个账号

![pasted image 0](https://gitee.com/luojinyuan/picture/raw/master/202302101500325.png)

然后要充值余额

![image](https://gitee.com/luojinyuan/picture/raw/master/202302101502880.png)

一次接码OpenAi的验证码费用是大概11卢布，人民币来看差不多是1块钱，不过只能充美金，就先充直个1美金钱。可以选择对你任何方便方式。支付宝也有

![image(1)](https://gitee.com/luojinyuan/picture/raw/master/202302101503773.png)

充值完成可能需要等一会，就先放着，直接进行下一步。

## **第二部是注册一个OpenAI账号**

首先打开[ChatGPT的账户注册页面](https://beta.openai.com/signup)。谷歌注册或者邮箱注册都可以，无所谓，我们这里用邮箱注册作为例子。

![Untitled](https://gitee.com/luojinyuan/picture/raw/master/202302101503588.png)

用邮箱注册后你要验证邮件。进去邮箱，查看email里的链接。

![image(2)](https://gitee.com/luojinyuan/picture/raw/master/202302101504290.png)

这里你需要输入需要的信息。

当然，有一些人会在这里遇到一个问题，会出现说不能在当前国家服务的提示。

![image(3)](https://gitee.com/luojinyuan/picture/raw/master/202302101505943.png)

不用怕，这个这文章就帮助你解决这个问题。

这方面那，给你一招。一般你出现这种问题，就是因为你的代理没有全局，或者位置不对。香港或中国的的代理是100%无法通过的。

这个问题是非常神奇的，只要你出现了这个提示，那么你接下来怎么切换代理，都是没用的。现在提供给你你一招解决。

## **解决地区问题**

先，你要把你的代理切换到任何合适的地区，我们这里选择了韩国。

然后，先复制下面这段代码

```
window.localStorage.removeItem(Object.keys(window.localStorage).find(i=>i.startsWith('@@auth0spajs')))
```

接着在地址栏里输入

```
javascript:
```

> 请注意，这里一定要输入，因为你复制的话是粘贴不了的。

然后再粘贴我们第一段复制的内容：

![Untitled(1)](https://gitee.com/luojinyuan/picture/raw/master/202302101507869.png)

然后按下回车键，刷新页面。如果你的代理没问题，就可以看到正常工作的注册页面了。


## **输入手机号码**

![Untitled(2)](https://gitee.com/luojinyuan/picture/raw/master/202302101508490.png)

这里选的是韩国，这是因为我们使用韩国的代理，但是我们最好选择印度。然后到我们的接码网站上去。在左侧搜索OpenAi，然后点击印度。

![pasted image 0(1)](https://gitee.com/luojinyuan/picture/raw/master/202302101509094.png)

点击”小黄车”。

![pasted image 0(2)](https://gitee.com/luojinyuan/picture/raw/master/202302101510959.png)

然后我们复制这个号码，粘贴过去。然后我们点击发送验证码就完成了。

等一会网站会提示验证码，我们复制粘贴。

> 当然用其他国家的手机号码也可以，不一定要跟代理的国家一样

![image(4)](https://gitee.com/luojinyuan/picture/raw/master/202302101510329.png)

这里你要选择你打算如何使用OpenAI。随便选择吧。

## **使用ChatGPT**

注册完后，打开[ChatGPT网站](https://chat.openai.com/auth/login)去登陆。

![Untitled(3)](https://gitee.com/luojinyuan/picture/raw/master/202302101511558.png)