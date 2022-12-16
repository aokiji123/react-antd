import { useState } from "react";
import dayjs from "dayjs";
import "./styles/dashboard.css";
import {
  Anchor, // basement for Link
  Avatar,
  Button,
  Col,
  Descriptions,
  Divider, // --------------------
  Layout,
  Empty,
  Form,
  Input,
  List,
  Menu,
  Modal,
  Row,
  Space,
  Steps,
  Table,
  Tag,
  TimePicker,
  Typography,
  notification,
  FloatButton,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Card from "antd/es/card/Card";
import ButtonGroup from "antd/es/button/button-group";

// icons
import { HiOutlineHome } from "react-icons/hi";
import { GrAdd, GrOrganization } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMoneyCollect } from "react-icons/ai";

import { data } from "./data";

// Link importing
const { Link } = Anchor;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <Layout className="container">
      <Header
        style={{
          backgroundColor: "white",
          height: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <GiHamburgerMenu
            onClick={() => setCollapsed(!collapsed)}
            size={24}
            style={{ marginRight: 20 }}
          />
          <div className="brand">ANTD</div>
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collapsed} theme="light">
          <Menu
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                icon: <HiOutlineHome />,
                children: [
                  {
                    label: "Add user",
                    key: "add_user",
                    icon: <BsPerson />,
                  },
                  {
                    label: "Delete user",
                    key: "delete_user",
                    icon: <BsPerson />,
                  },
                ],
              },
              {
                label: "About",
                key: "about",
                icon: <GrOrganization />,
              },
            ]}
          />
        </Sider>
        <Content className="content">
          <Space direction="horizontal">
            <Card>
              <AiOutlineMoneyCollect />
              <small>Total sales</small>
              <Typography.Title>$456</Typography.Title>
            </Card>
            <Card>
              <AiOutlineMoneyCollect />
              <small>Total sales</small>
              <Typography.Title>$2356</Typography.Title>
            </Card>
            <Card>
              <AiOutlineMoneyCollect />
              <small>Total sales</small>
              <Typography.Title>$1564</Typography.Title>
            </Card>
          </Space>
          <Divider />
          <TimePicker defaultValue={dayjs("12:08:23", "HH:mm:ss")} />
          <Card style={{ marginBottom: 20 }}>
            <Form layout="vertical">
              <Form.Item name="name" label="Name">
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary">Sign up</Button>
              </Form.Item>
            </Form>
          </Card>
          <Card style={{ marginBottom: 20 }}>
            <FloatButton icon={<GrAdd />} />
            <Button type="primary" onClick={() => setModal(true)}>
              Add
            </Button>
            {` `}
            <Button
              onClick={() => {
                notification.success({
                  message: "User created successfully",
                });
              }}
            >
              Show notification
            </Button>
            {` `}
            <Button
              danger
              type="primary"
              onClick={() =>
                Modal.confirm({
                  title: "Do you really want to delete these items?",
                  content:
                    "(This window will be closed after clicking on the button)",
                })
              }
              style={{ marginBottom: 20 }}
            >
              Delete
            </Button>
            <List
              bordered
              dataSource={data.slice(0, 3)}
              renderItem={(item) => {
                return (
                  <List.Item>
                    <Descriptions title="User Details">
                      <Descriptions.Item label="Name">
                        {item.name}
                      </Descriptions.Item>
                      <Descriptions.Item label="Email">
                        {item.email}
                      </Descriptions.Item>
                      <Descriptions.Item label="Status">
                        {item.status ? "Active" : "Not active"}
                      </Descriptions.Item>
                    </Descriptions>
                  </List.Item>
                );
              }}
            />
          </Card>
          <Empty />
          <Avatar
            src="data:image/jpeg;base64,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"
            style={{ marginBottom: 20 }}
            size="large"
          />
          <Card style={{ marginBottom: 20 }}>
            <Steps
              current={3}
              items={[
                {
                  title: "Sign Up",
                  description: "Please sing up",
                },
                {
                  title: "Account",
                  description: "Personalize your account",
                },
                {
                  title: "Subscription",
                  description: "Buy a subscription to unlock some features",
                },
                {
                  title: "You're done",
                },
              ]}
            />
          </Card>

          <Row gutter={10}>
            <Col span={18}>
              <Card>
                <Typography.Title>something</Typography.Title>
              </Card>
            </Col>
            <Anchor affix={false}>
              <Link href="#blabla" title="Blabla" />
              <Link href="#blabla2" title="Blabla2" />
              <Link href="#blabla3" title="Blabla3" />
              <Link href="#blabla4" title="Blabla4" />
            </Anchor>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col span={15}>
              <Table
                style={{}}
                dataSource={data}
                columns={[
                  {
                    dataIndex: "id",
                    title: "ID",
                    key: "id",
                    fixed: true,
                  },
                  {
                    dataIndex: "name",
                    title: "Name",
                    key: "name",
                  },
                  {
                    dataIndex: "email",
                    title: "Email",
                    key: "email",
                  },
                  {
                    dataIndex: "status",
                    title: "Status",
                    render: (val) =>
                      val ? <Tag>Active</Tag> : <Tag>Not Active</Tag>,
                  },
                  {
                    title: "Actions",
                    render: () => (
                      <ButtonGroup>
                        <Button>Edit</Button>
                        <Button type="primary" danger>
                          Delete
                        </Button>
                      </ButtonGroup>
                    ),
                  },
                ]}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
      <Modal
        open={modal}
        onCancel={() => setModal(false)}
        title="Add a new user"
      >
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Password">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default App;
