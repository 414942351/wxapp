// const app = getApp();
// const apiUrl = app.config.apiUrl;
// const utils = require('../../utils/util.js');
// Page({
//   /**
//    * 页面的初始数据
//    */
//   data: {
//     item: {
//       index: 0,
//       msg: 'this is a template',
//       time: '2017-06-21'
//     },
//     mobile: ''
//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     utils.sayHi();
//     console.log(getCurrentPages())
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
//     wx.playBackgroundAudio({
//       dataUrl: '../../source/audios/test.mp3',
//       success(res) {
//         console.log(res);
//       },
//       fail(err) {
//         console.log(err)
//       }
//     })
//     // console.log('this is on ready')
//     // wx.getBackgroundAudioPlayerState({
//     //   success: function (res) {
//     //     console.log('request success');
//     //     var status = res.status
//     //     var dataUrl = res.dataUrl
//     //     var currentPosition = res.currentPosition
//     //     var duration = res.duration
//     //     var downloadPercent = res.downloadPercent
//     //   },
//     //   fail(err) {
//     //     console.log(err)
//     //   }
//     // })
//     // 	let _this = this;
//     // 	console.log(_this.data)
//     //   wx.request({
//     //   	url: apiUrl + '/api/h5/user/canBeRegistered',
//     //   	data: {
//     //   		mobile: '18304621667'
//     //   	},
//     //   	header: {
//     //   		'content-type': 'application/json'
//     //   	},
//     //   	success(res) {
//     //   		console.log(res);
//     //   		_this.setData({
//     //   			mobile: 'heihe'
//     //   		})
//     //   	}
//     //   })
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   },
//   tapName: function (event) {
//     console.log(event.target.dataset);
//   },
//   bindViewTap: function (event) {
//     event.currentTarget.dataset.alphaBeta === 1;
//     event.currentTarget.dataset.alphabeta === 2;
//   }
// })



// Page({
//   onReady: function (e) {
//     // 使用 wx.createAudioContext 获取 audio 上下文 context
//     this.audioCtx = wx.createAudioContext('myAudio')
//     this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
//     this.audioCtx.play()
//   },
//   data: {
//     src: ''
//   },
//   audioPlay: function () {
//     this.audioCtx.play()
//   },
//   audioPause: function () {
//     this.audioCtx.pause()
//   },
//   audio14: function () {
//     this.audioCtx.seek(14)
//   },
//   audioStart: function () {
//     this.audioCtx.seek(0)
//   }
// })
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
    
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     wx.getLocation({
//       success: function(res) {
//         console.log(res);
//       },
//     })
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
    
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
    
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
    
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
    
//   }
// })

Page({
  onReady() {
    // wx.onCompassChange(function(res){
    //   console.log(res);
    // })

    wx.setNavigationBarTitle({
      title: '这只是一个title',
    })

  }
})






