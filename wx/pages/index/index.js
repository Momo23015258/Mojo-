//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  handlejump2:function(e){
    var id=e.target.dataset.id
    wx.navigateTo({
      url: '/pages/musicList/musicList?id='+id,
    })
  },
  handlejump:function(e){
   var mid=e.target.dataset.id;
   var url = '/pages/hotMusic/hotMusic';
   if(mid==1){
     wx.navigateTo({
       url:url,
     })
   }else if(mid==2){
     wx.navigateTo({
       url: '/pages/rangkList/rangkList',
     })
   }
  },
  data: {
    list: [
      { id: 1, img_url:"http://127.0.0.1:3044/img/1112264.jpg"},
      { id: 2, img_url:"http://127.0.0.1:3044/img/1113518.jpg" },
      { id: 3, img_url:"http://127.0.0.1:3044/img/1543989.jpg" },
      { id: 4, img_url:"http://127.0.0.1:3044/img/1543904255244_.jpg"},
    ],
    list1:[
      { id: 1, img_url:"http://127.0.0.1:3044/img/track_radio_199_13_1.jpg" ,text:"热门歌曲"},
      { id: 2, img_url:"http://127.0.0.1:3044/img/track_radio_307_13_1.jpg" ,text:"冷门单曲酱"},
    ],
    hotlist:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
   
    // 排行榜/搜索歌单
    // wx.request({
    //   url: 'https://api.bzqll.com/music/tencent/search?key=579621905&s=123&limit=100&offset=0&type=song',
    //   data: "",
    //   success: (res) => {
    //     console.log(res)
    //   }
    // });
    // //专辑详情
    // wx.request({
    //   url: 'https://api.bzqll.com/music/tencent/album?key=579621905&id=000i3LVu28zIG2',
    //   data: "",
    //   success: (res) => {
    //     console.log(res)
    //   }
    // });
    // //音乐详情
    
    // wx.request({
    //   url: 'https://api.bzqll.com/music/tencent/song?key=579621905&id=001fXNWa3t8EQQ',
    //   data: "",
    //   success: (res) => {
    //     console.log(res)
    //   }
    // });
    // 热门歌单
    wx.request({
      url: 'https://api.bzqll.com/music/tencent/hotSongList?key=579621905&categoryId=10000000&sortId=3&limit=60',
      data: "",
      
      success: (res) => {
        console.log("热门歌单推荐无歌");
        console.log(res.data.data);
        this.setData({
         hotlist:res.data.data,
        });
      }
    });

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
