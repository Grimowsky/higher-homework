import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image/Image";
import ImageList from "./components/ImageList/ImageList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      lastIndex: 0
    };
  }

  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then(response => response.json())
      .then(data => this.setState({ pictures: data }));
  }

  loadNextPicture = () => {
    this.setState({ lastIndex: this.state.lastIndex + 3 });
  };

  render() {
    const extractedIDs = this.state.pictures.map((pic, i) => {
      return pic.url.split(`photos/`)[1].split(`"`)[0];
    });
    return (
      <div>
        <div className="flex-container">
          <ImageList pictures={extractedIDs} lastIndex={this.state.lastIndex} />
        </div>
        <button onClick={this.loadNextPicture}> Next </button>
      </div>
    );
  }
}

export default App;
