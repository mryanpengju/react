
import React, { Component } from 'react';
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
import Logo from "../assets/images/logo.png";
import styles from "./styles/common.css";
import Ts from "./styles/team.css";
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import m1 from "../assets/images/M1.png";
import m5 from "../assets/images/M5.png";
import xing1 from "../assets/images/xing1.png";
import xing2 from "../assets/images/xing2.png";
import xing3 from "../assets/images/xing3.png";
import head from "../assets/images/head.png";
import sf from "../assets/images/sf.png";
import tel from "../assets/images/tel.png";
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
                    style={{ height: "1.1rem", background: "rgba(0,0,0,1)", borderBottom: "1px solid #C4A060" }}
                    mode="light"
                    icon={
                        <img src={GoBack} style={{ height: ".38rem" }} alt=""></img>
                    }
                    onLeftClick={() => history.goBack()}
                >
                    <span style={{ fontSize: "0.4rem", color: "rgba(255,214,137,1)" }}>
                        我的直推
                    </span>
                </NavBar>
                {/* <div className={styles.banner}>

                </div> */}
                <div className={styles.mine}>
                    <ul className={Ts.lists}>
                        <li >
                            <div className={Ts.userheaderimg}>
                                <img src={head} alt=""/>
                            </div>
                            <div className={Ts.userinfodetail}>
                                <p>
                                    徐更是 <img src={m1} alt=""/>
                                </p>
                                <p>
                                    <img src={sf} alt="" /> BJ10004
                                </p>
                                <p>
                                    <img src={tel} alt="" /> 18621377074
                                </p>
                                <p>
                                    2018-1-2
                                </p>
                            </div>
                        </li>
                        <li>


                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}