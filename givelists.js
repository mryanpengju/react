
import React, { Component } from 'react';
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
import Logo from "../assets/images/logo.png";
import styles from "./styles/common.css";
import Gs from "./styles/givelists.css";
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
                        转账记录
                    </span>
                </NavBar>
                
                <div className={styles.mine}>
                    <div className={Gs.lists}>
                        <p className={Gs.listsTime}>2018-01-01</p>
                        <div className={Gs.listsLeft}>
                            <p>交易类型<span>大厅交易</span></p>
                            <p>交易状态<span>交易完成</span></p>
                        </div>
                        <div className={Gs.listsRight}>
                            <p>IPO</p>
                            <p>2000</p>
                        </div>
                    </div>
                    <div className={Gs.lists}>
                        <p className={Gs.listsTime}>2018-01-01</p>
                        <div className={Gs.listsLeft}>
                            <p>交易类型<span>大厅交易</span></p>
                            <p>交易状态<span>挂卖中</span></p>
                        </div>
                        <div className={Gs.listsRight}>
                            <p>IPO</p>
                            <p>2000</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}