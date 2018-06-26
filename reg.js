
import React, { Component } from 'react';
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
import Logo from "../assets/images/logo.png";
import styles from "./styles/common.css";
import inputS from "./styles/inputS.css"
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import {Toast,Picker, List,} from "antd-mobile"
// import { createForm } from 'rc-form';
// import arrayTreeFilter from 'array-tree-filter';

// import { district, provinceLite } from 'antd-mobile-demo-data';
// 如果不是使用 List.Item 作为 children

  
@connect(state => ({
    user: state.user,
}))
export default class Change extends Component {
    constructor() {
        super();
        this.state = {
            visible: true,
            selected: '',
            bgcol:'#33333',
            codeVal:"获取验证码",
            disabledattr:false,
            asyncValue: [],
        };
    }
     //发送验证码
     async onClickYzm() {
        this.setState({disabledattr:true})
        ////console.log()
        //var mobile = this.refs.mobbile.value;
        // var code = await user.smscode({ mobile: mobile });
        //console.log(code)
        this.setState({ bgcol: "#c4c4c4" })
        const _this = this;
        let num = 60;
        let Countdown = setInterval(function () {
            num = num - 1;
            if (num >= 0) {
                _this.setState({ codeVal: num });
                return;
            }
            _this.setState({ codeVal: '获取验证码' });
            _this.setState({ bgcol: "#33333" })
            _this.setState({disabledattr:false})
            clearInterval(Countdown);
            }, 100)
        
    }
    tap(){
        var mobbile = this.refs.mobbile.value;
        var psw = this.refs.psw.value;
        var two_psw = this.refs.two_psw.value;
        var pay_psw = this.refs.pay_psw.value;
        var code = this.refs.code.value;
        var commer = this.refs.commer.value;
        if(mobbile === ''){
            Toast.offline("手机号不能为空!", 2);
            return;
        }
        if(psw === ''){
            Toast.offline("密码不能为空!", 2);
            return;
        } 
        
        if(pay_psw === ''){
            Toast.offline("支付密码不能为空!", 2);
            return;
        }
        if(code === ''){
            Toast.offline("验证码不能为空!", 2);
            return;
        }

        if (two_psw !== psw) {
            Toast.offline("密码输入不一致!", 2);
            return;
        }
        let data = {
            mobbile,
            psw:psw,
            code,
            pay_psw,
            commer,

        }
        console.log("post",data)
        Toast.success("成功", 2);
    }
    onPickerChange = (val) => {
        
        // let colNum = 1;
        // const d = [...this.state.data];
        // const asyncValue = [...val];
        // this.setState({
        //     data: d,
        //     cols: colNum,
        //     asyncValue,
        // });
        
    };
    render() {
        const { history } = this.props;
        const data = [
            { value: '1', label: '小型糖果机' },
            { value: '2', label: '中型糖果机' },
            { value: '3', label: '中大型糖果机' },
            { value: '4', label: '大型糖果机' },
            { value: '5', label: '代理糖果机' },
       ];
        return (
            <div>
                <style>
                    {`
                        .am-toast-text-info{
                            font-size:.26rem;
                            line-height:.52rem;
                        }
                        .am-toast-notice-content .am-toast-text.am-toast-text-icon {
                            border-radius: .15rem;
                            padding: .25rem .15rem ;
                        }
                        .am-list-item{
                            height:.54rem;
                            padding: 2% 2.4%;
                            margin-top: .3rem;
                            background: rgba(227,205,124,1)
                        }
                        .am-list-content{
                            font-size:.24rem;
                            color：#555040;
                            opacity:.8;
                        }
                    `}
                </style>
                <NavBar
                    style={{ height: "1.1rem", background: "rgba(0,0,0,1)", borderBottom: "1px solid #C4A060" }}
                    mode="light"
                    icon={
                        <img src={GoBack} style={{ height: ".38rem" }} alt=""></img>
                    }
                    onLeftClick={() => history.goBack()}
                >
                    <span style={{ fontSize: "0.4rem", color: "rgba(255,214,137,1)" }}>
                        注册
                    </span>
                </NavBar>
                
                <div className={styles.mine}>
                    <input className={inputS.iptlogin} placeholder="请输入手机号" ref="mobbile"/>
                    <div className={inputS.getcode}>
                        <input className={inputS.iptlogin} placeholder="请输入验证码" ref="code"/>
                        <button styles={{color:this.state.bgcol}} onClick={this.onClickYzm.bind(this)} disabled={this.state.disabledattr}>{this.state.codeVal}</button>
                    </div>
                   
                    <input className={inputS.iptlogin} placeholder="设置登录密码"  ref="psw"/>
                   
                    <input className={inputS.iptlogin} placeholder="确认登陆密码"  ref="two_psw"/>
                    <input className={inputS.iptlogin} placeholder="确认支付密码"  ref="pay_psw"/>
                    <input className={inputS.iptlogin} placeholder="推荐人账号"  ref="commer"/>
                    <Picker
                        data={data}
                        cols={1}
                        value={this.state.asyncValue}
                        onPickerChange={this.onPickerChange}
                        onOk={v => { this.setState({ asyncValue: v})}}
                    >
                        <List.Item arrow="horizontal" onClick={this.onClick}>请选择等级</List.Item>
                    </Picker>

                    <div className={inputS.btn}>
                        <button onClick={this.tap.bind(this)}>注册</button>
                    </div>
                </div>
            </div>
        )
    }
}