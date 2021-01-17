
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteUser, getUsers, sortUsers } from '../services/home/action';
import { Table, Avatar, Switch, Pagination } from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined, DeleteFilled, EditOutlined } from '@ant-design/icons';
import MainButton from './MainButton';
import { FormDate } from '../halpers/utils';
import moment from 'moment';
import { PAGINATION_DATA } from '../halpers/constants';

const AntdTable = (props) => {
  const [sortData, setSortData] = useState({ _sort: "", type: false })

  useEffect(() => {
    if (sortData._sort) {
      props.dispatch(sortUsers({ ...sortData, size: "10" }))
    }
  }, [sortData])

  const columns = [
    {
      title: 'Photo',
      dataIndex: 'photo',
      render: (a, b) => {
        return <>
          <Avatar
            size={40}
            src={b.photo} />
        </>
      }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      sortDirections: ['ascend', 'descend'],
      width: 250,
      test: 'asc',
      onHeaderCell: (column) => {
        return {
          onClick: () => {
            setSortData({ _sort: 'name', _order: sortData.type ? 'desc' : 'asc', type: !sortData.type })
          }
        };
      }
    },
    {
      title: 'Location',
      dataIndex: 'location',
      width: 350,
      sorter: true,
      onHeaderCell: (column) => {
        return {
          onClick: () => {
            setSortData({ _sort: 'location', _order: sortData.type ? 'desc' : 'asc', type: !sortData.type })
          }
        };
      }
    },
    {
      title: 'Registered Date',
      dataIndex: 'registeredDate',
      width: 350,
      sorter: (a, b) => moment(a.registeredDate).unix() - moment(b.registeredDate).unix(),
      render: (a, b) => {
        return <>{FormDate(b.registeredDate)}</>
      }
    },
    {
      title: 'Last Active Date',
      dataIndex: 'lastActiveDate',
      width: 350,
      sorter: (a, b) => moment(a.lastActiveDate).unix() - moment(b.lastActiveDate).unix(),
      render: (a, b) => {
        return <>{FormDate(b.lastActiveDate)}</>
      }
    },
    {
      title: 'Email',
      dataIndex: '--',
      expandRowByClick: true,
      render: () => {
        return (<><MailOutlined /></>)
      }
    },
    {
      title: 'Action',
      dataIndex: '--',
      key: 'action',
      expandRowByClick: true,
      width: 120,
      render: (a, b) => {
        return (<div className='table-action' kay='action'>
          <Switch className={"swich-checked"} style={{ borderColor: b.disabled ? "#72B59B" : "#F54745" }} size="small" defaultChecked={b.disabled} />
          <EditOutlined onClick={() => { props.redirect({ pathname: '/uers-form', state: { id: b.id } }) }} />
          <DeleteFilled style={{ color: "#F54745" }} onClick={() => { props.dispatch(deleteUser(b.id)) }} />
        </div>
        )
      },
    },

  ];

  useEffect(() => {
    props.dispatch(getUsers({ page: 1, size: 10 }))
  }, [])

  const onShowSizeChange = (page, size) => {
    props.dispatch(getUsers({ page, size, _order: sortData._order || "" }))
  }

  return (
    <>
      <div className='title-wrapper'>
        <span className='title'> All users </span>
        <span className='line' />
        <MainButton btnName='New user'
          onClick={() => { props.redirect({ pathname: '/uers-form', state: {} }) }} />
      </div>
      <div className='users-table'>
        <Table
          loading={!props.users}
          rowSelection={true}
          columns={columns}
          dataSource={props.users}
          pagination={false}
        />
        <Pagination
          pageSizeOptions={PAGINATION_DATA}
          onChange={(a, b) => { onShowSizeChange(a, b) }}
          defaultCurrent={1}
          total={100} // total count get from db
        />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    users: state.home.data
  };
};

export default connect(mapStateToProps)(AntdTable)
