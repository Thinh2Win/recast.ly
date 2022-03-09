import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
// import exampleVideoData from '/src/data/exampleVideoData.js';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videos: [],
    };
    this.getYouTubeVideos('cute cats');
  }

  getYouTubeVideos(query) {
    searchYouTube(query, (videos) =>
      this.setState({
        currentVideo: videos[0],
        videos: videos,
      })
    );
  }

  onVideoClick(clickedVideo) {
    this.setState({
      currentVideo: clickedVideo
    });
  }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search HandleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5" >
          <VideoList
            videos={this.state.videos}
            OnVideoClick={this.onVideoClick.bind(this)}
          />
        </div>
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
