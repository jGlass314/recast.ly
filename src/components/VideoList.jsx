var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((videoObj) => 
      <VideoListEntry video={videoObj} callback={props.callback}/>
    )} 
  </div>
);