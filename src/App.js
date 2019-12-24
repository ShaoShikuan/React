import React, {Component} from 'react'
//import logo from './logo.svg';
import './App.css';
import Upload from './upload'
//import axios from 'axios';
//import List from './List';
//import Communicate from './communicate';
import Download from './download'
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
      return (
        <div>  
          <div className='formupload'>
            <Upload />
          </div>
          <div className='formdownload'>
            <Download />
          </div>
        </div>
      )
  }
}


export default App;
