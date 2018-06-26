
import React, { Component } from 'react';
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
import Logo from "../assets/images/logo.png";
import styles from "./styles/common.css";
import Ds from "./styles/dating.css";
import { connect } from 'dva';
import { routerRedux} from 'dva/router';
import { Modal} from 'antd-mobile';
function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }
@connect(state => ({
    user: state.user,
}))
export default class Change extends Component {
    constructor() {
        super();
        this.state = {
            visible: true,
            selected: '',
            modal1: false,
        };
    }
    //弹出框
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      }
      onClose = key => () => {
        this.setState({
          [key]: false,
        });
      }
    
      onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
      }
    
    render() {
        const { history } = this.props;
        // const infoList = this.props.user.gonggao;
        // console.log("router", infoList)
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
                        .am-modal-transparent{
                            width:85%;
                            padding:0 2.5%;
                        }
                        .am-modal-content{
                            padding:0;
                        }
                        .am-modal-transparent .am-modal-content .am-modal-body{
                            padding:0;
                        }
                        .am-modal-transparent .am-modal-content{
                            padding:0
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
                        交易大厅
                    </span>
                </NavBar>
                {/*弹出框---详细信息*/}
                <Modal
                     visible={this.state.modal1}
                     transparent
                     styles={{width:"6.3rem"}}
                     maskClosable={false}
                     wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                   >
                    <div  className={Ds.ModalWrap}>
                       <div className={Ds.ModalTitle}>
                           详细信息
                           <span onClick={this.onClose('modal1')}>×</span>
                       </div>
                       <div>
                            <p className={Ds.ModalInfo}>
                                <span>
                                    订单号
                                </span>
                                <span>
                                    545645645648846
                                </span>
                            </p>
                            <p className={Ds.ModalInfo}>
                                <span>
                                    出售人
                                </span>
                                <span>
                                    聚格
                                </span>
                            </p>
                            <p className={Ds.ModalInfo}>
                                <span>
                                    出售金额
                                </span>
                                <span>
                                    100IQ
                                </span>
                            </p>
                            <p className={Ds.ModalInfo}>
                                <span>
                                    真实姓名
                                </span>
                                <span>
                                    聚格科技
                                </span>
                            </p>
                       </div>
                       <div className={Ds.btn}>
                             <button>购买</button>
                       </div>
                    </div>
                </Modal>
                {/*END*/}
                <div className={styles.mine}>
                    <ul className={Ds.lists}>
                        <li>
                            <p>出售人：聚格</p>
                            <p>出售数量：100IQ</p>
                            <p>出售时间：2018-01-02</p>
                            <button onClick={this.showModal('modal1')}>查看</button>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}