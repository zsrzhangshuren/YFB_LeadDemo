import React, { Component } from 'react'
import {
    PanelBody,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription
} from 'react-weui';



export default class changecontent extends Component {
    render() {
        return (
            <div>
                <PanelBody style={{backgroundColor:"white",marginTop:10}}>
                   <MediaBox type="appmsg" href="javascript:void(0);">
                        <MediaBoxHeader style={{width: 92,height: 92,borderRadius:8}}><img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} style={{height:"100%",width:"100%",borderRadius:10}}/></MediaBoxHeader>  
                        <MediaBoxBody>
                            <MediaBoxTitle>
                                <span>万达影院电影票7.8折优惠</span>
                            </MediaBoxTitle>
                            <MediaBoxDescription> 
                                <span style={{fontSize:15,color:"#FF8800"}}>免费领取</span>
                                <span style={{display:"block",margin:"9px 0 3px 2px"}}><span style={{padding:3,background:"#666666",color:"white"}}>万达影院</span></span>       
                            </MediaBoxDescription>
                        </MediaBoxBody>
                    </MediaBox>
                    <MediaBox type="appmsg" href="javascript:void(0);">
                        <MediaBoxHeader style={{width: 92,height: 92}}><img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} style={{height:"100%",width:"100%"}}/></MediaBoxHeader>  
                        <MediaBoxBody>
                            <MediaBoxTitle>
                                <span>精选多肉拼盘组盆搭配组合</span>
                                <span style={{display:"block"}}>精选多肉拼</span>
                            </MediaBoxTitle>
                            <MediaBoxDescription> 
                                <span style={{fontSize:15}}>32积分</span>
                                <span style={{display:"block"}}>市场参考价：32元</span>       
                            </MediaBoxDescription>
                        </MediaBoxBody>
                    </MediaBox>
                </PanelBody>
            </div>
        );
    }
}
