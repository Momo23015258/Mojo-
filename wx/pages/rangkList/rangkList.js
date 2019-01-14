// pages/rangkList/rangkList.js
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    coldMusic:[],
      },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //冷门歌曲歌单
   wx.request({
      url: 'https://api.bzqll.com/music/tencent/songList?key=579621905&id=1147906982',
      data:"",
      success:(res)=>{
        console.log('冷门歌单');
        console.log(res.data.data.songs);
        this.setData({
          coldMusic: res.data.data.songs
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