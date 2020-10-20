import React from "react";
import addIklan from "./addIklan";
import { Link } from "react-router-dom";
import { Layout, Modal, Button, Row, Col } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const List = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Row justify="space-between">
          <Col>
            <p>Coba Header</p>
          </Col>
          <Col>
          <Link to="/addIklan">
            <Button type="primary">
              + Add Iklan
            </Button>
            </Link>
          </Col>
        </Row>
      </Header>
      <Content>Content Iklan</Content>
      <Footer>Powered By Indent Team</Footer>
    </Layout>
  );
};

export default List;
