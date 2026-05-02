Page({
  data: {
    challenge: null,
    completed: false
  },

  onLoad(options) {
    if (options.data) {
      const challenge = JSON.parse(decodeURIComponent(options.data));
      this.setData({
        challenge
      });

      // Check if already completed
      const completedList = wx.getStorageSync('completedChallenges') || [];
      const isCompleted = completedList.includes(challenge.id);

      this.setData({
        completed: isCompleted
      });
    }
  },

  markComplete() {
    const challengeId = this.data.challenge.id;
    let completedList = wx.getStorageSync('completedChallenges') || [];

    if (!completedList.includes(challengeId)) {
      completedList.push(challengeId);
      wx.setStorageSync('completedChallenges', completedList);
    }

    this.setData({
      completed: true
    });

    wx.showToast({
      title: 'Challenge Completed! 🎉',
      icon: 'success'
    });
  }
});