class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }
  
  changeCurrentVideo(videoFromList) {
    this.setState({
      currentVideo: videoFromList
    });
  }
  
  componentDidMount() {
    console.log('componentDidMount.');
    searchYouTube({max: 5, query: 'lakers', key: window.YOUTUBE_API_KEY}, (data) => {
      this.setState({
        currentVideo: data[0],
        videoList: data
      });
    }
    );
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchFunction={window.searchYouTube}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} callback={(video) => { this.changeCurrentVideo(video); } }/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
