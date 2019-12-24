//使用表单实现文件上传功能的组件
import React, { Component } from 'react';

class Upload extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="UP">
                <header className="App-header">
                  <form action="http://127.0.0.1:5000/upload" method="post" encType="multipart/form-data">{/*规定在发送表单数据之前如何对其进行编码。*/}
                    <input type="file" name='file' id="myfile"/>
                    <input type="submit" value="上传"/>
                  </form>   
                </header>
            </div>
        );
    }
}
export default Upload;