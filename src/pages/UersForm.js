import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getOneUser, resetUser, uploadImg, editUser, addUser } from '../services/home/action';
import { connect } from 'react-redux';
import { defaultValue, fillImg } from '../services/home/selectors';
import { API_URL } from '../halpers/constants';

const tailLayout = {
  wrapperCol: {
    offset: 1,
    span: 16,
  },
};


const UersForm = (props) => {

  useEffect(() => {
    if (props.history.location.state?.id) {
      props.dispatch(getOneUser(props.history.location.state.id))
    }
    return () => {
      props.dispatch(resetUser())
    }
  }, [])

  const saveData = (data) => {
    if (props.history.location.state?.id) {
      props.dispatch(editUser(data))
    } else {
      props.dispatch(addUser(data))

    }
  }

  return (
    <div className='user-form'>

      <div className='title-wrapper'>
        <span className='title'> {props.history.location.state.id ? "Edit user" : "New user"} </span>
        <span className='line' />
      </div>

      <div className='form-wrapper'>
        <Form
          onFinish={saveData}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: 'default',
          }}
          size={'default'}
          fields={props.user ? props.user : [{}]}
        >

          <Form.Item {...tailLayout}
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder={'User Name'} defaultValue={props.user?.name} />
          </Form.Item>
          <Form.Item {...tailLayout} name="photo">
            <Upload
              fileList={props.imgSrc.length && props.imgSrc}
              action={`${API_URL}/images`}
              listType="picture"
              className="upload-list-inline"
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item {...tailLayout}
            name="email"
            defaultValue={props.user?.email}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder={'Email'} type='email' defaultValue={props.user?.email} />
          </Form.Item>
          <Form.Item {...tailLayout}
            name="location"
          >
            <Input placeholder={'Location'} defaultValue={props.user?.location} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
        </Button >
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: defaultValue(state),
    imgSrc: fillImg(state)
  };
};

export default connect(mapStateToProps)(UersForm);
