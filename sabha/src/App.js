import React from "react";
import Choise from "./components/choice"
import "./App.css";

function App() {
 
    var styles = [
      'background: rgb(214,16,58);'
      , 'background: linear-gradient(90deg, rgba(214,16,58,1) 0%, rgba(36,9,121,1) 72%, rgba(53,10,115,1) 100%, rgba(0,212,255,1) 100%);'
      , 'border: 1px solid #3E0E02'
      , 'color: white'
      , 'display: block'
      , 'text-shadow: white'
      , 'box-shadow: 5px 5px 20px -1px #FFE225'
      , 'line-height: 40px'
      , 'text-align: center'
      , 'font-weight: bold'
  ].join(';');
console.log('%c دعواتكم لنا بالخير و الفرج', styles);
  
  return (
     <div>
      <Choise />
    </div>
  );
}

export default App;
