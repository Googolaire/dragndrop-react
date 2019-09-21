import React from 'react';
import './App.css';

import DraggableUploader from "./imageUploader/draggableuploader";
require("./imageUploader/renderer");
function App() {
  return (
    <div className="App">
      <DraggableUploader />
    </div>
  );
}

export default App;
