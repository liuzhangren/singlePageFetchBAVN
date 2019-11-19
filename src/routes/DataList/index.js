import React from 'react'
import {
  Table,
  Input,
  Card
} from 'antd'
import style from './index.css'
import { connect } from 'dva'

const { Search } = Input

@connect(({ example }) => ({
  example
}))

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.columns = [
      {
        title: '资产id',
        width: '5%',
        dataIndex: 'asset_id',
        align: 'center'
      },
      {
        title: '区块序号',
        width: '5%',
        dataIndex: 'block_id',
        align: 'center'
      },
      {
        title: '资产变化额度',
        width: '5%',
        dataIndex: 'amount_altered',
        align: 'center'
      },
      {
        title: '当前余额',
        width: '5%',
        dataIndex: 'balance',
        align: 'center'
      },
      {
        title: '时间',
        width: '5%',
        dataIndex: 'time',
        align: 'center'
      }
    ]
  }
  search(value) {
    this.props.dispatch({
      type: 'example/fetch',
      payload: value
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className={style.container}>
        <Card
          title={
            <>
              记录查询
              <Search 
                placeholder="输入查询内容..."
                enterButton="Search"
                style={{
                  width: '40%',
                  float: 'right',
                  height: '80%'
                }}
                onSearch={this.search.bind(this)}
              />
            </>
          }
          style={{
            minWidth: '80%',
            height: '80%',
            borderRadius: '6px',
            boxShadow: 'rgba(53, 56, 58, 0.1) 0px 0px 19px 0px'
          }}
        >
          <Table
            tableLayout='fixed'
            width='90%'
            columns={this.columns}
            dataSource={this.props.example.dataList}
          />
        </Card>
      </div>
    )
  }
}