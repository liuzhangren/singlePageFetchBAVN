import React from 'react'
import {
  Table,
  Input,
  Card
} from 'antd'
import style from './index.css'
import { connect } from 'dva'
import dayjs from 'dayjs'

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
        title: 'id',
        width: '5%',
        dataIndex: 'asset_id',
        align: 'center'
      },
      {
        title: 'block',
        width: '5%',
        dataIndex: 'block_id',
        align: 'center'
      },
      {
        title: 'alter',
        width: '5%',
        dataIndex: 'amount_altered',
        align: 'center'
      },
      {
        title: 'balance',
        width: '5%',
        dataIndex: 'balance',
        align: 'center'
      },
      {
        title: 'time',
        width: '5%',
        dataIndex: 'time',
        align: 'center',
        render: (value) => {
          return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
        }
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