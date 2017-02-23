// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList />
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    // 'state'
    this.state = {
      list: window.exampleVideoData,
      current: window.exampleVideoData[0],
    };
  }
/*
  onClickEntry() {
    this.setState(({
      current: 
    });
  }
*/

  render() {
    return (
      <div>
       <Nav />
       <div className="col-md-7">
         <VideoPlayer video={this.state.current} />
       </div>
       <div className="col-md-5">
         <VideoList videos={this.state.list} />
       </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
