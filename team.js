
import React, { Component } from 'react';
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
import Logo from "../assets/images/logo.png";
import styles from "./styles/common.css";
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;
@connect(state => ({
    user: state.user,
}))
export default class Change extends Component {
    constructor() {
        super();
        this.state = {
            visible: true,
            selected: '',
            treeData: [
                { title: '徐倩 lv1', key: '0' },
                
            ],
        };
    }
    onLoadData = (treeNode) => {
        return new Promise((resolve) => {
          if (treeNode.props.children) {
            resolve();
            return;
          }
          setTimeout(() => {
            treeNode.props.dataRef.children = [
              { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
              { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
            ];
            this.setState({
              treeData: [...this.state.treeData],
            });
            resolve();
          }, 1000);
        });
      }
      renderTreeNodes = (data) => {
        return data.map((item) => {
          if (item.children) {
            return (
              <TreeNode title={item.title} key={item.key} dataRef={item}>
                {this.renderTreeNodes(item.children)}
              </TreeNode>
            );
          }
          return <TreeNode {...item} dataRef={item} />;
        });
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
                            margin-top:.4rem;
                            color:red;
                        }
                        .am-toast-notice-content .am-toast-text.am-toast-text-icon {
                            border-radius: .15rem;
                            padding: .25rem .15rem ;
                        }
                        .ant-tree{
                            font-size:.22rem;
                            padding-top:.4rem;
                        }
                        .ant-tree li span.ant-tree-switcher, .ant-tree li span.ant-tree-iconEle{
                            width:1rem;
                            height:.32rem;
                            background:transparent;
                        }
                        :root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close:after{
                            font-size:.32rem;
                            color:#cb9b3c;
                        }
                        .ant-tree-title{
                            font-size:.32rem;
                            color:#cb9b3c;
                        }
                        :root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open:after{
                            font-size:.32rem;
                            color:#cb9b3c;
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
                        我的团队
                    </span>
                </NavBar>
                {/* <div className={styles.banner}>

                </div> */}
                <div className={styles.mine}>
                    <Tree loadData={this.onLoadData}>
                        {this.renderTreeNodes(this.state.treeData)}
                    </Tree>
                   
                </div>
            </div>
        )
    }
}