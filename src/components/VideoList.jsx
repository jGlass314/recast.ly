class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.videoListEntryArray = [];
    console.log(props);
  }

  render() {
    return (
      <div className="video-list">
        {this.props.videoData.map((videoObj) => 
          <VideoListEntry video={videoObj} />
        )}
        <div><VideoListEntry video={this.props.videoData[0]}/></div>
        <div><h5><em>videoListEntry</em> view goes here</h5></div>
        <div><h5><em>videoListEntry</em> view goes here</h5></div>
        <div><h5><em>videoListEntry</em> view goes here</h5></div>
        <div><h5><em>videoListEntry</em> view goes here</h5></div>
      </div>
    );
  }
}






















/*


var VideoList = (props) => (
  <div className="video-list">
    <div>{props.videoListEntries[0]}</div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

//console.log("data not in function", window.exampleVideoData);
var VideoListApp = function() {
  var videoListEntryArray = [];
  //console.log("data in function", window.exampleVideoData);
  window.exampleVideoData.forEach(function(videoObj) {

    var videoListEntry = new VideoListEntry({
      videoId: videoObj.id.videoId,
      title: videoObj.snippet.title,
      description: videoObj.snippet.description,
      thumbnail: videoObj.snippet.thumbnails.default.url
    });
    videoListEntryArray.push(videoListEntry);
  });
  <VideoList videoListEntries={videoListEntryArray}/>;
};
window.VideoListApp = VideoListApp;
*/
