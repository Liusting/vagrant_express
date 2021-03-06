//app.js


App({
  // 全局ip+端口
  ipAndPort: 'http://192.168.30.19:8081',
  onLaunch: function () {
    let that = this;
    this.screenSize();
    // 展示本地存储能力
    // 1.调用微信登录接口，获取code
    wx.login({
      success: function (res) {
        let code = res.code;
        // 获取用户信息
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // console.log('已经授权')
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: function (res) {
                  // wx.request({
                  //   url: 'http://192.168.30.19:8081/decodeUserInfo',
                  //   method: "POST",
                  //   header: {
                  //     "Content-Type": "application/x-www-form-urlencoded"
                  //   },
                  //   data: {
                  //     code: code,
                  //     encryptedData:res.encryptedData,
                  //     iv:res.iv
                  //   },
                  //   success: function (res) {
                  //     console.log(res)
                  //   },
                  //   fail:function(res) {
                  //     console.log("获取用户信息失败", res)
                  //   }
                  // })
                  
                  // 可以将 res 发送给后台解码出 unionId
                  that.globalData.userInfo = res.userInfo

                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (that.userInfoReadyCallback) {
                    that.userInfoReadyCallback(res)
                  }
                },
                fail(res) {
                  console.log("获取用户信息失败", res)
                }
              })
            }
          }
        })
      }
    })

    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  screenSize: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        //可视窗口宽度
        var ww = res.windowWidth;
        //可视窗口高度
        var hh = res.windowHeight;
        that.globalData.ww = ww;
        that.globalData.hh = hh;
      }
    })
  },
  globalData: {
    userInfo: null,
    ColorList: [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ]
  },

})