import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { loginUser } from "./Services/UserService.service";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const handleLoginbBtn = async (username, password) => {
  try {
    await loginUser(username, password).then(() => {
      window.location.href = "/table";
    });
  } catch (err) {
    console.log(err);
  }
};

const Login = () => (
  <div
    style={{
      backgroundColor: "white",
      width: "100rem",
      height: "100rem",
    }}
  >
    <h1 style={{ textAlign: "center", color: "black", padding: "1rem" }}>
      Login
    </h1>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={handleLoginbBtn}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);
export default Login;
