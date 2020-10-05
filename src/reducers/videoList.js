import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  console.log(action);
  switch(action.type){
    case 'VIDEO_LIST_CHANGED':
      return action.videos;
    default: return state;
  }
};

export default videoListReducer;
