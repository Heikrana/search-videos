import React from "react";

import SearchBar from "./SearchBar";
import YouTube from "../apis/YouTube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {

   state = {videos: [], selectedVideo: null};

   onQuerySubmit = (query) => {
      YouTube.get("/search/", {
         params: {
            q: query
         }
      }).then((res) => {
         this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0]
         });
      }).catch((err) => console.log(err));
   };

   onVideoSelect = (video) => {
      this.setState({selectedVideo: video});
   };

   render() {
      return (
         <div className="ui container">
            <SearchBar onSubmit={this.onQuerySubmit} />
            <div className="ui grid">
               <div className="ui row">
                  <div className="eleven wide column">
                     <VideoDetails video={this.state.selectedVideo} />
                  </div>
                  <div className="five wide column">
                     <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                  </div>
               </div>
            </div>
         </div>
      );
   };
}

export default App;