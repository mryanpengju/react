
import React, { Component } from 'react';
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
import head from "../assets/images/head.png";
import styles from "./styles/common.css";
import MS from "./styles/mine.css";
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

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

    render() {
        const { history } = this.props;
        const infoList = this.props.user.gonggao;
        console.log("router", infoList)
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
                    style={{ height: "1.1rem", background: "rgba(0,0,0,1)", borderBottom:"1px solid #C4A060" }}
                    mode="light"
                    icon={
                       <img src={GoBack} style={{ height: ".38rem" }} alt=""></img>
                    }
                     onLeftClick={() => history.goBack()}
                    >
                    <span style={{ fontSize: "0.4rem", color: "rgba(255,214,137,1)" }}>
                        个人中心
                    </span>
                </NavBar>
                <div className={styles.banner}>
                    <div className={MS.userimg}>
                        <img src={head} alt=""/>
                    </div>
                    <div className={MS.username} onClick={()=>{history.push("./changehead")}}>
                        jugekeji >
                    </div>
                </div>
                <div className={styles.mine}>
                    <div className={MS.userinfo} onClick={()=>{history.push("./changeEmile")}}>
                        <span>邮箱</span>

                        <span>2555655333@qq.com></span>
                    </div>
                    <div className={MS.userinfo}>
                        <span>真实姓名</span>
                        <span>与资源</span>
                    </div>
                    <div className={MS.userinfo}>
                        <span>身份证号</span>

                        <span>410777198808120088</span>
                    </div>
                    <div className={MS.userinfo} onClick={()=>{history.push("./changeBank")}}>
                        <span>银行卡号</span>

                        <span>6217002560021170960></span>
                    </div>
                    <div className={MS.userinfo} onClick={()=>{history.push("./changeMobbile")}}>
                        <span>手机号</span>

                        <span>18625938888></span>
                    </div>
                    <div className={MS.userinfo} onClick={()=>{history.push("./changeAddress")}}>
                        <span>住址</span>

                        <span>北京市老炮区老炮街8排8号></span>
                    </div>
                </div>
            </div>
        )
    }
}