class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: window.exampleVideoData,
      current: window.exampleVideoData[0],
      defaultQuery: 'react'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(video) {
    this.setState({
      current: video
    });
  }

  handleChange(string) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: string,
      max: 5
    };
    this.props.searchYouTube(options, this.searchVideo.bind(this));
  }


  searchVideo(array) {
    this.setState({
      list: array,
      current: array[0]
    });
  }


  componentDidMount() {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, max: 5, query: this.state.defaultQuery}, this.searchVideo.bind(this));

  }

  render() {
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
