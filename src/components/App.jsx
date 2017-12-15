class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videoList: [], //window.exampleVideoData,
      currentVideo: {}, //window.exampleVideoData[0]
      loading: true,
      searchTimeStamp: null,
      inputValue: ''
    };
  }
  
  changeCurrentVideo(videoFromList) {
    this.setState({
      currentVideo: videoFromList
    });
  }
  
  componentWillMount() {
    console.log('componentWillMount.');
    var initSearchTerm = 'keplar';
    searchYouTube({max: 5, query: initSearchTerm, key: window.YOUTUBE_API_KEY}, (data) => {
      if (data.length > 0) {
        this.setState({
          currentVideo: data[0],
          videoList: data,
          loading: false,
          searchTimeStamp: Date.now()
        });
      } else {
        console.error('empty search results for keyword:', initSearchTerm);
      }
    }
    );
  }
  
  handleTextInput(value) {
    console.log('searching for: ', value);
    var currentTimeStamp = Date.now();
    if (currentTimeStamp - this.state.searchTimeStamp >= 500) {
      console.log('timediff: ', currentTimeStamp - this.state.searchTimeStamp);
      searchYouTube({max: 5, query: value, key: window.YOUTUBE_API_KEY}, (data) => {
        if (data.length > 0) {
          this.setState({
            currentVideo: data[0],
            videoList: data,
            searchTimeStamp: currentTimeStamp,
            inputValue: value
          });
        } else {
          console.error('empty search results for keyword:', value);
        }
      }
      );
    }
  }

  render() {
    if (this.state.loading) {
      console.log('rendering');
      return (
        <div>loading...</div>
      );
    }
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchFunction={window.searchYouTube} callback={(value) => this.handleTextInput(value)} searchValue={this.state.inputValue}/></div>
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
