import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image/Image";
import ImageList from "./components/ImageList/ImageList";

const picturesAmount = 3;

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      ids: [],
      lastIndex: 0
    };
  }

  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then(response => response.json())
      .then(data =>
        this.setState({
          pictures: data,
          ids: data.map(pic => pic.url.split(`photos/`)[1].split(`"`)[0])
        })
      );
  }

  loadNextPicture = () => {
    this.setState({ lastIndex: this.state.lastIndex + picturesAmount });
  };

  render() {
    return (
      <div>
        <div className="flex-container">
          <ImageList
            pictures={this.state.ids}
            lastIndex={this.state.lastIndex}
            picturesAmount={picturesAmount}
          />
        </div>
        <button onClick={this.loadNextPicture}> Next </button>
      </div>
    );
  }
}

export default App;
