import React from "react";
import myJavaScriptFile from "./myJavaScriptFile";

function App() {
  const message = myJavaScriptFile.myMessage;

  return <div>{message}</div>;
}

export default App;
