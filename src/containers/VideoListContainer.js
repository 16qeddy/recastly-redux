import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import React from 'react';

var VideoListContainer = (props) => {
  return <VideoList videos ={props.videos}handleVideoListEntryTitleClick = {props.changeVideo}/>
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
const mapStateToProps = (state, ownProps) => {
  return{
  videos: state.videoList
}}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    changeVideo: () => dispatch({ type: 'CHANGE_VIDEO' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer)
