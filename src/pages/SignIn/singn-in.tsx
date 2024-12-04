import { Button, Form, Input, message, Space, Typography, Card } from "antd";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { loginType } from "./service/mutation/LoginType";
import { usePostLogin } from "./service/mutation/usePostLogin";

export const Login = () => {
  const { mutate } = usePostLogin();
  const navigate = useNavigate();

  const submit = (data: loginType): void => {
    console.log(data);
    
    mutate(data, {
      onSuccess: (res) => {
        message.success("Login successful!");
        
        Cookies.set("Token", res.token);

        navigate("/app");
      },
      onError: () => {
        message.error("Invalid phone number or password!");
      }
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
      <Card style={{ width: 400 }} title="Login" bordered={false}>
        <Form onFinish={submit} layout="vertical">
          <Form.Item
            name="phone_number"
            label="Phone Number"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input placeholder="Enter your phone number" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" size="large" />
          </Form.Item>

          <Form.Item>
            <Button 
              htmlType="submit" 
              type="primary" 
              block 
              size="large"
              loading={false}
            >
              Log In
            </Button>
          </Form.Item>

          <Space direction="vertical" size={10} style={{ width: "100%", textAlign: "center" }}>
            <Typography.Link href="/forgot-password">Forgot Password?</Typography.Link>
            <Typography.Link href="/signup">Don't have an account? Sign up</Typography.Link>
          </Space>
        </Form>
      </Card>
    </div>
  );
};
