Page({
  data: {
    challenges: [
      { 
        id: 1,
        title: 'Dribble 100 times without stopping',
        description: 'Test your dribbling skills.',
        icon: '🏀',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      { 
        id: 2,
        title: 'Make 10 free throws',
        description: 'Accuracy challenge.',
        icon: '🎯',
        video: 'https://www.w3schools.com/html/movie.mp4'
      },
      { 
        id: 3,
        title: 'Run a full court in 30 seconds',
        description: 'Speed drill.',
        icon: '⚡',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4'
      }
    ]
  },

takeChallenge(e) {
  const challenge = e.currentTarget.dataset.challenge;

  wx.navigateTo({
    url: `/pages/challenge-detail/challenge-detail?data=${encodeURIComponent(JSON.stringify(challenge))}`
  });
}
});