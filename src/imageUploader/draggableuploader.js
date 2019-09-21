import React, {Component} from "react";

import {AnchorButton, Intent} from '@blueprintjs/core';

import "./style.css"
export default class DraggableUploader extends Component {
constructor(props) {
    super(props);
    this.state = {

    };
}
onFileLoad() {

}
render() {
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className="sub-header">Drag an Image</div>
            <div className="draggable-container">
                <input type="file" id="file-browser-input" ref={input => this.fileInput = input}
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onDrop={this.onFileLoad.bind(this)}
                />
                <div class="files-preview-container">

                </div>
                <div class="helper-text">
                    Drag n Drop Images Here
                </div>
                <div class="file-browser-container">
                <AnchorButton text={"Browse"} intent={Intent.PRIMARY} minimal={true} onClick={() => this.fileInput.click()}/>
                </div>
            </div>
        </div>
    );
    }

}