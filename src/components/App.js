import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import youtube from "../service/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./style.scss";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("League Of Legends");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        <div className="container-fluid" style={{ padding: "0 30px" }}>
          <div className="row">
            <div className="col-sm-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-sm-4">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
