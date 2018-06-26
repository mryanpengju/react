
import React, { Component } from 'react';
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
import Logo from "../assets/images/logo.png";
import styles from "./styles/common.css";
import Ss from "./styles/sell.css";
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
                    style={{ height: "1.1rem", background: "rgba(0,0,0,1)", borderBottom: "1px solid #C4A060" }}
                    mode="light"
                    icon={
                        <img src={GoBack} style={{ height: ".38rem" }} alt=""></img>
                    }
                    onLeftClick={() => history.goBack()}
                >
                    <span style={{ fontSize: "0.4rem", color: "rgba(255,214,137,1)" }}>
                        转账
                    </span>
                </NavBar>

                <div className={styles.mine}>
                    <div className={Ss.IPO}>
                        <p>
                            Ipo币
                        </p>
                        <p>
                            2000
                        </p>
                    </div>
                    <div>
                        <div className={Ss.sellipt}>
                            <span>转账账户</span>
                            <input placeholder="请输入转账账户" />
                        </div>
                        <div className={Ss.sellipt}>
                            <span>转账数量</span>
                            <input placeholder="请输入转账数量" />
                        </div>
                        <div className={Ss.sellipt}>
                            <span>交易密码</span>
                            <input placeholder="请输入交易密码" type="password"/>
                        </div>
                    </div>
                    <div className={Ss.btn}>
                        出售
                    </div>
                </div>
            </div>
        )
    }
}