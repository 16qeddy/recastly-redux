import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import React from 'react';

var VideoPlayerContainer = (props) => {
  return <VideoPlayer {...props}/>
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = (state, ownProps) => ({
  video: state.currentVideo
})

export default connect(mapStateToProps)(VideoPlayerContainer)