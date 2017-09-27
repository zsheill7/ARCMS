import React, { Component } from "react";
import ReactDOM from "react-dom";
import DropzoneComponent from "react-dropzone-component";
import "../utils/dropzone.min.css";

var componentConfig = {
  iconFiletypes: [".jpg", ".png", ".gif", ".obj"],
  showFiletypeIcon: true,
  postUrl: "/uploadHandler"
};
var djsConfig = { autoProcessQueue: false };
var eventHandlers = { addedfile: file => console.log(file) };

class Dropzone extends Component {
  render() {
    return (
      <div style={{ height: "100px" }}>
        <DropzoneComponent
          config={componentConfig}
          djsConfig={djsConfig}
          eventHandlers={eventHandlers}
        />
      </div>
    );
  }
}

export default Dropzone;
