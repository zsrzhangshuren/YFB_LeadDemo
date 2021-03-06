import React, { Component } from 'react'
import styles from './index.css'
import ReactDOM from 'react-dom';
import {Button, ButtonArea} from 'react-weui';


export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
           e:"",
        };
    }    
    handleClick(){
        window.history.back(-1);
    }
    handleChange(e){
        this.setState({
            e:e.target.value
        })
        const inpname=ReactDOM.findDOMNode(this.refs.numInput).value;
        console.log(this.state.e,inpname)
    }
    render() {
        return (
            <div>
                <div style={{height:50,borderBottom:"1px solid #CCC",backgroundColor:"white"}}>
                    <div className="iconfont icon-icon10-copy" style={{float:"left",lineHeight:3.19+"rem",fontSize:18}} onClick={this.handleClick.bind(this)}></div>
                    <div style={{textAlign:"center",lineHeight:3.19+"rem",fontSize:18}}>设置</div>
                </div>
                <div style={{backgroundColor:"white"}}>
                    <div style={{width:"92%",margin:"20px auto"}}>
                        <div style={{height:80}}>
                            <div style={{float:"left",lineHeight:"80px"}}>头像</div>
                            <div style={{float:"right",marginTop:13}}>
                                <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} width={70} />
                            </div>
                        </div>
                        <div style={{borderTop:"1px solid #EEEEEE",overflow:"hidden",height:46}}>
                            <div style={{float:"left",lineHeight:"46px"}}>昵称</div>
                            <div style={{float:"right"}}>
                                <input type="text"  defaultValue="面对疾风吧" ref="numInput" onChange={this.handleChange.bind(this)} className={styles.inputcontent}/>
                            </div>
                        </div>
                        <div style={{borderTop:"1px solid #EEEEEE",overflow:"hidden",height:46}}>
                            <div style={{float:"left",lineHeight:"46px"}}>性别</div>
                            <div style={{float:"right"}}>
                                <input type="text"  defaultValue="面对疾风吧" className={styles.inputcontent}/>
                            </div>
                        </div>                
                    </div>
                </div>
                <div>
                    <ButtonArea>
                        <Button>保存</Button>                      
                    </ButtonArea>
                </div>          
            </div>
        );
    }
}