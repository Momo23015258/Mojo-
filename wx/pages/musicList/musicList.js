// pages/musicList/musicList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList:[],
    num:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var id=options.id;
   wx.request({
     url: 'https://api.bzqll.com/music/netease/songList?key=579621905&id=3778678&limit=10&offset=0',
     success:(res)=>{
       console.log('歌单');
       this.setData({
         musicList:res.data.data.songs,
         num:id,
       })
        
     }
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
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