//使用表单实现文件下载功能的组件
import React, { Component } from 'react';

class Download extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='DOWN'>
                <header className="App-header">
                    <form method="get" action="http://127.0.0.1:5000/download/B0320.txt">
                      <button type="submit">Download!</button>
                    </form>
                </header>
            </div>
        )
    }
}
export default  Download;