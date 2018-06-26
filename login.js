
import React, { Component } from 'react';
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
import Logo from "../assets/images/head.png";
import styles from "./styles/common.css";
import loginS from "./styles/login.css"
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Toast} from 'antd-mobile';
@connect(state => ({
    user: state.user,
}))
export default class Change extends Component {
    constructor() {
        super();
        this.state = {
            visible: true,
            selected: '',
        };
    }
    tap(){
        const { history } = this.props;  
        var mobbile = this.refs.mobbile.value;
        var psw = this.refs.psw.value;
        if(mobbile === ''){
            Toast.offline("手机号不能为空!", 2);
            return;
        }
        if(psw === ''){
            Toast.offline("密码不能为空!", 2);
            return;
        }
        Toast.success("登录成功", 2); 
        history.push("./index")
    }
    render() {
        const { history } = this.props;
        //const infoList = this.props.user.gonggao;
        //console.log("router", infoList)
        const NavbarProps = {
            history
        }
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
                        登录
                    </span>
                </NavBar>
                
                <div className={styles.mine}>
					<div className={loginS.minewrap}>
						<div className={loginS.logo}>
							<img src={Logo}/>
						</div>
						<div className={loginS.input}>
							<input placeholder="请输入手机号" ref="mobbile"/>
						</div>
						<div className={loginS.input2}>
							<input placeholder="请输入密码" type="password" ref="psw"/>
						</div>
						<div className={loginS.goother}>
							<span onClick={()=>history.push("./forget")}>忘记密码？</span>
							<span onClick={()=>history.push("./reg")}>立即注册</span>
							
						</div>
						<div className={loginS.input3}>
							<button onClick={this.tap.bind(this)}>登录</button>
						</div>
					</div>
                </div>
            </div>
        )
    }
}