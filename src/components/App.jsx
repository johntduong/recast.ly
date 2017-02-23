class App extends React.Component {
  constructor(props) {
    //console.log(props);
    //console.log('list', window.exampleVideoData);
    super(props);
    // 'state'
    this.state = {
      list: window.exampleVideoData,
      current: window.exampleVideoData[0],
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(video) {
    //console.log('before', this.state.current);
    this.setState({
      current: video
    });
    //console.log('after', this.state.current);
  }


  render() {
    //console.log('test', this.state.list);
    //console.log('test2', this.state.current);
    return (
      <div>
       <Nav />
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
