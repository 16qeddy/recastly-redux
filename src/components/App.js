import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import SearchContainer from '../containers/SearchContainer';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import VideoListContainer from '../containers/VideoListContainer';
import handleVideoSearch from '../actions/search.js';
class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   videos: [],
    //   currentVideo: null
    // };

  //  this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }



  componentWillMount() {
    console.log(this.props);
    handleVideoSearch('react tutorials');
  }

  // handleVideoListEntryTitleClick(video) {
  //   this.setState({currentVideo: video});
  // }

  // getYouTubeVideos(query) {
  //     handleVideoSearch(query);
  //   );
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
