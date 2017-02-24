class App extends React.Component {
  constructor(props) {
    // console.log("wow", props);
    //console.log('list', window.exampleVideoData);
    super(props);
    // 'state'
    this.state = {
      list: window.exampleVideoData,
      current: window.exampleVideoData[0],
      defaultQuery: 'react'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // console.log("what is this here?", this);
  }

  handleClick(video) {
    //console.log('before', this.state.current);
    this.setState({
      current: video
    });
    //console.log('after', this.state.current);
  }

  handleChange(string) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: string,
      max: 5
    };

    this.props.searchYouTube(options, this.searchVideo.bind(this));
    //componentDidMount();
  }



  getYouTubeSearch(query) {
    var options = {};
    options.key = this.props.api;
    options.query = query;

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        currentVideo: videos[0],
        list: videos
      })
    );
  }

  searchVideo(array) {
    // console.log('searchVideo this', this);
    this.setState({
      list: array,
      current: array[0]
    });
  }


  componentDidMount() {
    console.log('Component DID MOUNT!');
    //function
    // var theCallBack = function(array) {
    //   console.log(array);
    //   this.setState = {
    //     list: array,
    //     current: array[0]
    //   };
    // };
    //console.log('searchVideo', props.searchVideo);
    console.log('this.props', this.props);
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, max: 5, query: this.state.defaultQuery}, this.searchVideo.bind(this));

  }

  render() {
    //console.log('test', this.state.list);
    //console.log('test2', this.state.current);
    return (
      <div>
       <Nav handleSearchInputChange={this.handleChange.bind(this)}/>
       <div className="col-md-7">
         <VideoPlayer video={this.state.current} />
       </div>
       <div className="col-md-5">
         <VideoList videos={this.state.list} onVideoClick={this.handleClick}/>
       </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
