import React, { Component } from 'react';
import { NavBar, Popover, Icon,Carousel, } from "antd-mobile";

import Logo from "../assets/images/logo.png";
import BG from "../assets/images/bg.png";
import styles from "./styles/indexpage.css";
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import $ from "jquery"
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';

HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
@connect(state => ({
    user: state.user,
}))

export default class Change extends Component {
    constructor() {
        super();
        this.state = {
            visible1: false,
            selected1: '',
            visible2: false,
            selected2: '',
            visible3: false,
            selected3: '',
            data: ['1', '2', '3'],
            imgHeight: 176,
        };
    }
    //气泡1
    onSelect1 = (opt) => {
        const {history}= this.props;
        console.log(opt.props.value);
        this.setState({
            visible1: false,
            selected1: opt.props.value,
        });
        if (opt.props.value === 'team'){
            history.push("/teamlists")
        }else if (opt.props.value === 'scan'){
            history.push("/team")
        }else if (opt.props.value === 'level'){
            history.push("/level")
        }
    };
    handleVisibleChange1 = (visible1) => {
        this.setState({
            visible1:visible1
        });
    };
    //气泡2
    onSelect2 = (opt) => {
         console.log(opt.props.value);
        const { history } = this.props;
        this.setState({
            visible2: false,
            selected2: opt.props.value,
        });
        if (opt.props.value === 'dating') {
            history.push("/dating")
        } else if (opt.props.value === 'sell'){
            history.push("/sell")
        } else if (opt.props.value === 'give') {
            history.push("/give")
        }else if (opt.props.value === 'change') {
            history.push("/change")
        }
    };
    handleVisibleChange2 = (visible2) => {
        this.setState({
            visible2: visible2
        });
    };
    //气泡3 
    onSelect3 = (opt) => {
        const { history } = this.props;
        // console.log(opt.props.value);
        this.setState({
            visible3: false,
            selected3: opt.props.value,
        });
        if (opt.props.value === 'givelists') {
            history.push("/givelists")
        } else if (opt.props.value === 'selllists') {
            history.push("/selllists")
        } else if (opt.props.value === 'buylists') {
            history.push("/buylists")
        } else if (opt.props.value === 'duipeng') {
            history.push("/duipeng")
        } else if (opt.props.value === 'jiangjun') {
            history.push("/jiangjun")
        } else if (opt.props.value === 'commer') {
            history.push("/commer")
        }
    };
    handleVisibleChange3 = (visible3) => {
        this.setState({
            visible3: visible3
        });
    };
    //end
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        //图标
        var chart = null;
        $.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {
            chart = Highcharts.chart('container', {
                chart: {
                    zoomType: 'x',
                    backgroundColor: 'rgba(0,0,0,0)',
                },
                title: {
                    text: null
                },
                
                // subtitle: {
                //     text: document.ontouchstart === undefined ?
                //         '鼠标拖动可以进行缩放' : '手势操作进行缩放'
                // },
                credits: {
                    enabled: false //不显示LOGO 
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        millisecond: '%H:%M:%S.%L',
                        second: '%H:%M:%S',
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '%m-%d',
                        week: '%m-%d',
                        month: '%Y-%m',
                        year: '%Y'
                    },
                    
                    labels: {
                        style: {
                            fontSize: ".2rem" 
                           
                        },
                        x: 0,
                        y: 29,
                    },
                },
                tooltip: {
                    dateTimeLabelFormats: {
                        millisecond: '%H:%M:%S.%L',
                        second: '%H:%M:%S',
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '%Y-%m-%d',
                        week: '%m-%d',
                        month: '%Y-%m',
                        year: '%Y'
                    }
                },
                yAxis: {
                    title: {
                        text:null,
                        style: {
                            color: 'red',
                            fontSize:".3rem"
                        }
                    },
                    labels:{
                        style: {
                           fontSize: ".2rem"
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, 'rgb(132,122,78)'],
                                [1, 'rgb(132,122,78)']
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'area',
                    name: '美元兑欧元',
                    data: data
                }]
            });
        });
    }
    render() {
        const { history } = this.props;
        const infoList = this.props.user.gonggao;
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
                        .am-popover-item{
                           
                            height:0.72rem;
                            line-height:0.72rem;
                            background: linear-gradient(180deg,rgba(235,215,131,1),rgba(183,147,86,1));
                        }
                        .am-popover-inner{
                            font-size:0.3rem;
                            font-family:"PingFangSC-Regular";
                            color:rgba(30,30,30,1);
                            line-height:0.42rem;
                        }
                        .am-popover .am-popover-item-container{
                            height:auto;
                            padding:0 0.18rem;
                        }
                        .am-popover-arrow{
                            background:linear-gradient(180deg,rgba(235,215,131,1),rgba(183,147,86,1))!important;
                        }
                        .am-popover-arrow{
                            width:.27rem;
                            height:.27rem;
                        }
                        
                    `}
                </style>
                <NavBar
                    style={{ height: "1.1rem", background: "rgba(0,0,0,1)" }}
                    mode="light"
                    
                    >
                    <img src={Logo}/>
                </NavBar>
                
                <div className={styles.navwrap}>
                        <ul className={styles.navlists}>
                            <li>
                                <Popover mask
                                    overlayClassName="fortest"
                                    overlayStyle={{ color: 'currentColor' }}
                                    visible={this.state.visible1}
                                    overlay={[
                                        (<Item key="4" value="scan"  data-seed="logId">我的团队</Item>),
                                        (<Item key="5" value="team" style={{ whiteSpace: 'nowrap' }}>我的直推</Item>),
                                        (<Item key="6" value="level" style={{ whiteSpace: 'nowrap' }}>我的等级</Item>) ,
                                    ]}
                                    align={{
                                        overflow: { adjustY: 0, adjustX: 0 },
                                        offset: [-5, 0],
                                        background:"red"
                                    }}
                                    onVisibleChange={this.handleVisibleChange1}
                                    onSelect={this.onSelect1}
                                    placement='bottomLeft'
                                >
                                    <div className={
                                        styles.navvont
                                    }
                                   
                                    >
                                        <span>
                                            我的团队    
                                        </span>
                                        <Icon type="down" />
                                    </div>
                                </Popover>
                            </li>
                            <li>
                                <Popover mask
                                    overlayClassName="fortest"
                                    overlayStyle={{ color: 'currentColor' }}
                                    visible={this.state.visible2}
                                    overlay={[
                                        (<Item key="4" value="dating"  data-seed="dating" >大厅</Item>),
                                        (<Item key="5" value="sell"  style={{ whiteSpace: 'nowrap' }}>出售</Item>),
                                        (<Item key="6" value="give">
                                           转账
                                        </Item>),
                                         (<Item key="7" value="change">
                                         币种转换
                                      </Item>),
                                    ]}
                                    align={{
                                        overflow: { adjustY: 0, adjustX: 0 },
                                        offset: [-10, 0],
                                    }}
                                    onVisibleChange={this.handleVisibleChange2}
                                    onSelect={this.onSelect2}
                                >
                                    <div className={
                                        styles.navvont
                                    }
                                    >
                                        <span>
                                            交易
                                        </span>
                                        <Icon type="down" />
                                    </div>
                                </Popover>
                            </li>
                            <li>
                                <Popover mask
                                    overlayClassName="fortest"
                                    overlayStyle={{ color: 'currentColor' }}
                                    visible={this.state.visible3}
                                    overlay={[
                                        (<Item key="7" value="buylists" >购买记录</Item>),
                                        (<Item key="8" value="selllists"  >出售记录</Item>),
                                        (<Item key="9" value="givelists">
                                            转账记录
                                        </Item>),
                                        (<Item key="10" value="commer">
                                            推荐奖
                                        </Item>),
                                        
                                        (<Item key="12" value="duipeng">
                                            对碰奖
                                        </Item>),
                                        
                                        (<Item key="14" value="jiangjun">
                                            将军奖
                                        </Item>),
                                        (<Item key="15" value="button ct">
                                            奖金分配
                                        </Item>),
                                        // (<Item key="16" value="button ct">
                                        //     股份分配
                                        // </Item>),
                                        // (<Item key="17" value="button ct">
                                        //     股价控制
                                        // </Item>),
                                       
                                    ]}
                                    align={{
                                        overflow: { adjustY: 0, adjustX: 0 },
                                        offset: [-10, 0],
                                    }}
                                    onVisibleChange={this.handleVisibleChange3}
                                    onSelect={this.onSelect3}
                                >
                                    <div className={
                                        styles.navvont
                                    }
                                    >
                                        <span>
                                            交易记录
                                        </span>
                                        <Icon type="down" />
                                    </div>
                                </Popover>
                            </li>
                            <li>
                               
                                    <div className={
                                        styles.navvont
                                    }
                                    onClick={()=>{history.push("/mine")}}
                                    >
                                        <span>
                                            个人中心
                                        </span>
                                       
                                    </div>
                             </li>
                            {/*   */}
                            <li>
                               
                                    <div className={
                                        styles.navvont
                                    }
                                onClick={() => { history.push("/liuyan") }}
                                    >
                                        <span>
                                            留言
                                        </span>
                                       
                                    </div>
                               
                            </li>
                            <li>
                               
                                    <div className={
                                        styles.navvont
                                    }
                                    onClick={() => { history.push("/") }}
                                    >
                                        <span>
                                            退出登录
                                        </span>
                                   </div>
                                
                            </li>
                        </ul>
                </div>  
                <div className={styles.mine}>
                    <div className={styles.userinfo}>
                        <div className={styles.usertitle}>
                            会员资料
                        </div> 
                        <div className={styles.goldwrap}>
                            <Carousel className="space-carousel"
                                frameOverflow="visible"
                                cellSpacing={1}
                                slideWidth={0.4}
                                //autoplay
                                infinite
                                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                afterChange={index => this.setState({ slideIndex: index })}
                            >
                                {this.state.data.map((val, index) => (
                                    <a
                                        key={val}
                                        //href="http://www.alipay.com"
                                        style={{
                                            display: 'block',
                                            position: 'relative',
                                            top: this.state.slideIndex === index ? -10 : 0,
                                            height: "2.5rem",
                                            background: "rgba(255,255,255,0)",
                                            width:"2.6rem",
                                            borderRadius: '6px' ,
                                            border:"1px solid #B28E52",

                                }}
                            >
                                        {/* <img
                                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top' }}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}
                                        /> */}
                                        <div className={styles.goldInfo}>
                                            <div className={styles.goldTop}>
                                                现金币
                                            </div>
                                            <div className={styles.goldCenter}>
                                                1000.00
                                            </div>
                                            <div className={styles.goldBtn} onClick={()=>{history.push("./sell")}}>
                                               <button>出售</button>
                                            </div>
                                            <div className={styles.goldBottom}>
                                                
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </Carousel>       
                        </div> 
                        <div className={styles.userCont}>
                            <div className={styles.username}>
                                用户名：<span>聚格</span>
                            </div>
                            <div className={styles.username}>
                                用户名：<span>聚格</span>
                            </div>
                            <div className={styles.username}>
                                用户名：<span>聚格</span>
                            </div>
                            <div className={styles.username}>
                                用户名：<span>聚格</span>
                            </div>
                            <div className={styles.username}>
                                用户名：<span>聚格</span>
                            </div>
                        </div>          
                    </div>
                </div>                   
                {/*end*/}
                <div className={styles.laywrap}>
                    {/*投资*/}
                    <div className={styles.layout}>
                        <div className={styles.layoutTitle}>
                              最高收益率
                        </div>
                        <div className={styles.layoutCent}>
                            30%
                        </div>
                        <div className={styles.layoutBottom}>
                            <div>
                                <p>500</p>
                                <p>起投金额</p>
                            </div>
                            <div>
                                <p>500</p>
                                <p>平台保障</p>
                            </div>
                            <div>
                                <p>500</p>
                                <p>短期回报</p>
                            </div>
                           
                        </div> 
                        <div className={styles.layoutBtn} onClick={()=>{history.push("./invest")}}>
                            <button>投资升级</button>
                        </div>    
                    </div>
                    {/*图表*/}
                    <div className={styles.charts}>
                        <div className={styles.chartsTitle}>
                            <span>总股量：1000</span>
                            <span>总股量：1000</span>
                        </div>
                        <div className={styles.chartsbox}>
                            <div id="container" style={{
                                width: '5.59rem',
                                height: '3.12rem',
                                marginTop: '1rem',
                                }} ></div>
                        </div>
                        
                    </div>
                    {/*公告*/}
                    <div className={styles.news}>
                        <div className={styles.chartsTitle}>
                            <span>系统公告</span>
                            <span>更多消息</span>
                        </div>
                        <p className={styles.newcont}>
                            恭喜会员“张立国”幸运值爆棚，获得系统随机 赠送红包，更多红包雨22:30准时发送，期待用户 积极参加。系统24:00开始更新维护，望会员相互 告知，给您带来不便还请您担待。
                        </p>
                        <div className={styles.newtime}>
                       
                            <span> 2010-1-10 8.00</span>
                        </div>
                    </div>
                    {/*留白*/}
                    <div className={styles.bottoms}>
                                
                    </div>
                </div>
              
            </div>
            
        )
    }
}