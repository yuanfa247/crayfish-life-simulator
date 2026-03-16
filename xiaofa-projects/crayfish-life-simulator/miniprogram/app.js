// app.js - 《养一只小龙虾》人生模拟器
App({
  onLaunch() {
    // 小程序启动
    console.log("养一只小龙虾 - 人生模拟器启动")
    // 初始化全局数据
    this.globalData = {
      // 游戏状态
      gameStatus: "idle",
      // 用户偏好
      settings: {
        enableAds: true,
        autoSave: true
      }
    }
  },
  globalData: {
  }
})
