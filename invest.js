
import React, { Component } from 'react';
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
import Logo from "../assets/images/logo.png";
import styles from "./styles/common.css";
import investS from "./styles/investS.css";
import Ds from "./styles/dating.css";
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
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
                        .am-modal-transparent{
                            width:85%;
                            padding:0 2.5%;
                        }
                        .am-modal-content{
                            padding:0;
                        }
                        .am-modal-transparent .am-modal-content .am-modal-body{
                            padding:0;
                            overflow:visible;
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
                        投资升级
                    </span>
                </NavBar>
                <div className={styles.banner}>
                    <div className={investS.biaoyu}>
                        <div>
                        理财能手
                        </div>
                        <div>
                        收益颇丰
                        </div>
                    </div>
                    <div className={investS.biaoyu}>
                        BANKING EXPERTS LUCRATIVE
                    </div>
                </div>
                <div className={styles.mine}>
                    <div className={investS.mineTitle}>
                    选择理财/CHOOSE FINANCIAL
                    </div>
                    <div className={investS.mineCont} onClick={this.showModal('modal1')}>
                        <div className={investS.mineContTitle}>
                            <span>
                            投资金额
                            </span>
                            <span>
                            日约收益率 
                            </span>
                        </div>
                        <div className={investS.mineContDetail}>
                            <div className={investS.mineContleft}>
                                <p>IPO币</p>
                                <p>2000.00</p>
                            </div>
                            <div className={investS.mineContright}>
                                1%
                            </div>
                        </div>
                    </div>
                    <div className={investS.mineCont} onClick={this.showModal('modal1')}>
                        <div className={investS.mineContTitle}>
                            <span>
                            投资金额
                            </span>
                            <span>
                            日约收益率 
                            </span>
                        </div>
                        <div className={investS.mineContDetail}>
                            <div className={investS.mineContleft}>
                                <p>IPO币</p>
                                <p>2000.00</p>
                            </div>
                            <div className={investS.mineContright}>
                                1%
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                     visible={this.state.modal1}
                     transparent
                     styles={{width:"6.3rem"}}
                     maskClosable={false}
                     wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                   >
                    <div  className={Ds.ModalWrap}>
                       <div className={Ds.ModalTitle} style={{fontSize:".22rem",textAlign:"left"}}>
                            选择理财/CHOOSE FINANCIAL
                           <span onClick={this.onClose('modal1')}>×</span>
                       </div>
                       <div className={Ds.Modalcenter}>
                          <div>
                              <p className={Ds.active}>IPO支付</p>
                          </div>
                          <div>
                              <p>现金支付</p>
                          </div>
                       </div>
                       <div className={Ds.pswIpt}>
                            <span>支付密码</span>
                            <input placeholder="请输入支付密码" type="password"/>
                       </div>
                       <div className={Ds.btn}>
                             <button>购买</button>
                       </div>
                    </div>
                </Modal>
            </div>
        )
    }
}