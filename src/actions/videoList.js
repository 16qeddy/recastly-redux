var changeVideoList = (videos) => {
  //TODO:  Return some action object to change the list of videos in VideoList.
  return {
    type: 'VIDEO_LIST_CHANGED',
    videos: videos
  }
};

export default changeVideoList;
