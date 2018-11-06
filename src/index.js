import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "AIzaSyDUz3j-mw3GgrhqKB09rZjE5ZRCvDfne4M";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
