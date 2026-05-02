// videos.js
Page({
  data: {
    videos: [
      { id: 1, title: 'Basic Dribbling Drill', url: 'https://example.com/video1.mp4' },
      { id: 2, title: 'Shooting Practice', url: 'https://example.com/video2.mp4' },
      { id: 3, title: 'Defense Moves', url: 'https://example.com/video3.mp4' }
    ]
  },
  onLoad() {
    // Load videos from server or cloud
  },
  playVideo(e) {
    const url = e.currentTarget.dataset.url;
    // Use video component or navigate to video page
    wx.navigateTo({
      url: `/pages/video-player/video-player?url=${encodeURIComponent(url)}`
    });
  }
})