//这是一个简单的交互程序


import React, { Component } from 'react';

import './App.css';
import axios from 'axios' ;
 

import { Layout, Menu, Button,Breadcrumb, Icon } from 'antd';
 
class Communicate extends Component {
    constructor(props) {
        super(props)
        this.state = {
         list:[] }
         this.handleClick=this.handleClick.bind(this)
 
        }
 
handleClick(){
  let  url="http://127.0.0.1:5000/login?username=xxx&password=123456"
axios.get(url)
  .then(function (response) {
    let data =response.data
    alert(data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
 
 
  render() {
    return (
      <div className="App">
        <Button onClick={this.handleClick}>测试调用接口</Button>
      </div>
    );
  }
}
 
export default Communicate;