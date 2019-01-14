// pages/hotMusic/hotMusic.js
Page({

  /**
   * 页面的初始数据
   */
  handlejump:function(e){
   var num=e.target.dataset.on;
   wx.navigateTo({
     url: '/pages/hotList/hotList?num='+num,
   })
  },
  data: {
    hotMusic:[],
    update_time: '',
    listBgColor: '',
    isLight: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 热门歌曲
    wx.request({
      url: 'https://api.bzqll.com/music/netease/songList?key=579621905&id=3778678&limit=10&offset=0',
      data: "",
      success: (res) => {
        console.log('热门歌单');
        console.log(res.data.data.songs);
        this.setData({
          hotMusic: res.data.data.songs,
        });
      }
    });
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})