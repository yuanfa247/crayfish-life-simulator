// pages/settings/settings.js
Page({
  data: {
    soundEnabled: true,
    vibrationEnabled: true,
    autoSave: true
  },

  onLoad: function () {
    // 加载设置
    this.loadSettings()
  },

  // 加载设置
  loadSettings: function () {
    const settings = wx.getStorageSync('gameSettings')
    if (settings) {
      this.setData(settings)
    }
  },

  // 保存设置
  saveSettings: function () {
    wx.setStorageSync('gameSettings', {
      soundEnabled: this.data.soundEnabled,
      vibrationEnabled: this.data.vibrationEnabled,
      autoSave: this.data.autoSave
    })
    wx.showToast({
      title: '设置已保存',
      icon: 'success'
    })
  },

  // 开关切换
  onSwitchChange: function (e) {
    const { field } = e.currentTarget.dataset
    this.setData({
      [field]: e.detail.value
    })
    this.saveSettings()
  },

  // 清空数据
  clearData: function () {
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有游戏数据吗？此操作不可恢复',
      success: (res) => {
        if (res.confirm) {
          wx.clearStorageSync()
          wx.showToast({
            title: '数据已清空',
            icon: 'success'
          })
          // 重新加载默认设置
          this.setData({
            soundEnabled: true,
            vibrationEnabled: true,
            autoSave: true
          })
        }
      }
    })
  }
})
