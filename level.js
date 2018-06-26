import React,{Component} from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'dva';
// import { routerRedux } from 'dva/router';
import {WingBlank,WhiteSpace,Icon,SearchBar} from 'antd-mobile';
import styles from "./styles/teamTable.css";
import { NavBar } from "antd-mobile";
import GoBack from "../assets/images/goback.png";
//import headerIcon from "../assets/icon.png";


import { Table } from 'antd';
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width:'50%'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width:'50%'
}];
const data = [{
  key:0,
  name: '左区',
  age: 9000.00,
}, {
  key:1,
  name: '右区',
  age: 8000.00,
}, {
  key:2,
  name: '共',
  age: 17000,
}];

export default class TeamTable extends Component {
 
  render(){
    const {history}=this.props;
    
    return(
      <div className="main">
      <style>
      {`
      
      .am-search{
          height:.6rem;
          background-color:rgba(226,204,124,1);
      }
      .am-search-input{
          height:.6rem;

      }
      .am-search-input .am-search-synthetic-ph{
          line-height:.6rem;
      }
      .am-search-input input[type="search"]{
          font-size:.22rem;
          height:.6rem;
          line-height:.6rem;
      }
      .am-search-input .am-search-clear{
          padding:.3rem;
          background-size: .25rem .25rem;
      }
      
      .am-list-item img{
        width:16px;
        height:16px;
      }
      .main{
        width:100%;
        background: #FFFFFF;
        min-height: 100vh;
        overflow:hidden;
      }
      .am-list-content{
        font-size: .24px !important;
      }
      p{
        margin-bottom: 0;
      }
      .ant-table-title{
        background:linear-gradient(180deg,rgba(235,215,131,1),rgba(183,147,86,1));;
        color:rgba(51,51,51,1);
        font-size:.24rem;
      }
      .ant-table-tbody > tr > td {
        border-bottom: 1px solid #EBD783;
      }
      .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td {
        border-right: 1px solid #EBD783;
      }
      .ant-table-small.ant-table-bordered .ant-table-content {
        border-right: 1px solid #EBD783;
        border-left: 1px solid #EBD783;
        border-bottom: 1px solid #EBD783;
        background:#EBD783;
      }
      .ant-table table{
          font-size:.22rem;
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
                        我的等级
                    </span>
         </NavBar>


      <SearchBar placeholder="搜索用户" maxLength={8} />
      <div className={styles.tableC}>
        <div className={styles.tableItem}>
          <Table className={styles.LineA} columns={columns} size='small' bordered={true} dataSource={data}  showHeader={false} pagination={false}
          title={()=>(
            <div style={{textAlign:"center"}}>聚格科技</div>
          )}
          />
        </div>

        <div className={styles.tableItem}>
          <Table className={styles.LineB} columns={columns} size='small' bordered={true} dataSource={data}  showHeader={false} pagination={false}
          title={()=>(
            <div style={{textAlign:"center"}}>聚格左</div>
          )}
          />
          <Table className={styles.LineB} columns={columns} size='small' bordered={true} dataSource={data}  showHeader={false} pagination={false}
          title={()=>(
            <div style={{textAlign:"center"}}>聚格右</div>
          )}
          />
        </div>
        <div className={styles.tableItem}>
          <div className={styles.ItemItem}>
            <Table className={styles.LineC} columns={columns} size='small' bordered={true} dataSource={data}  showHeader={false} pagination={false}
            title={()=>(
              <div style={{textAlign:"center"}}>左1</div>
            )}
            />
            <Table className={styles.LineC} columns={columns} size='small' bordered={true} dataSource={data}  showHeader={false} pagination={false}
            title={()=>(
              <div style={{textAlign:"center"}}>左2</div>
            )}
            />
          </div>
          <div className={styles.ItemItem}>
            <Table className={styles.LineC} columns={columns} size='small' bordered={true} dataSource={data}  showHeader={false} pagination={false}
            title={()=>(
              <div style={{textAlign:"center"}}>右1</div>
            )}
            />
            <Table className={styles.LineC} columns={columns} size='small' bordered={true} dataSource={data}  showHeader={false} pagination={false}
            title={()=>(
              <div style={{textAlign:"center"}}>右2</div>
            )}
            />
          </div>
        </div>
      </div>
      </div>
  
    )
  }
}
