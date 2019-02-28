import React from 'react';
import youtube from '../service/youtube'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './style.css';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('League Of Legends');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        <div className="row">
          <div className="col-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-4">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
