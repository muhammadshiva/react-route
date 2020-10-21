import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Collapse } from "antd";
import {
  LeftOutlined,
  CarOutlined,
  LaptopOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { List, Typography, Divider } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const addIklan = () => {
  const { Panel } = Collapse;

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Row>
          <Col>
            <Link to="/List">
              <LeftOutlined />
            </Link>
          </Col>
          <Col>
            <h3
              style={{
                color: "#fff",
                fontStyle: "inherit",
                marginLeft: "10px",
              }}
            >
              Seller Web
            </h3>
          </Col>
        </Row>
      </Header>
      <Content
        style={{ marginLeft: "auto", marginRight: "auto", width: "18em" }}
      >
        <Col span={24}>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "roboto",
              marginTop: "20px",
            }}
          >
            PASANG IKLAN ANDA
          </h1>
          <List size="large" bordered>
            <Collapse accordion>
              <Row justify="space-between">
                <Col>
                  <List.Item.Meta avatar={<CarOutlined />} title="Mobil" />
                  <Panel header="This is panel header 1" key="1">
                    <p>Test</p>
                  </Panel>
                </Col>
              </Row>
            </Collapse>
          </List>
          <List size="large" bordered>
            <List.Item.Meta avatar={<HomeOutlined />} title="Properti" />
          </List>
          <List size="large" bordered>
            <List.Item.Meta
              avatar={<LaptopOutlined />}
              title="Elektronik & Gadget"
            />
          </List>
        </Col>
      </Content>
      <Footer>Powered By Indent Team</Footer>
    </Layout>
  );
};

export default addIklan;
