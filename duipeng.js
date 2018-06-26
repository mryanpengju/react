
import React, { Component } from 'react';
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
import Logo from "../assets/images/logo.png";
import styles from "./styles/common.css";
import CS from "./styles/commer.css";
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
                        对碰奖
                    </span>
                </NavBar>
                
                <div className={styles.mine}>
                    <ul className={CS.lists}>
                        <li className={CS.friseLI}>
                            <div>收益来源</div>
                            <div>收益时间</div>
                            <div>收益额</div>
                        </li>
                        <li className={CS.friseLI}>
                            <div>bj10001</div>
                            <div className={CS.time}>2018-01-02</div>
                            <div>2000.00</div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}