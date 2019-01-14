// pages/hotList/hotList.js
Page({

  /**
   * 页面的初始数据
   */
  handleNext:function(){
    this.setData({
      num:++this.data.num,})
  },
  handlePrex:function(){
    this.setData({
      num: --this.data.num,
    })
  },
  data: {
  num:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var num=options.num;
   console.log(num);
   this.setData({
     num,
     hotMusic:[],
     width:"",
     height:'',
   });
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
   wx.getSystemInfo({
     success:(res)=> {
       var height = res.windowHeight;
       var width = res.windowWidth;
       this.setData({
        height,
        width,
       })

     },
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
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