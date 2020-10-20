import React from "react";
import addIklan from "./addIklan";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Layout, Modal, Button, Row, Col } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const List = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/addIklan");
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Row justify="space-between">
          <Col>
            <p>Coba Header</p>
          </Col>
          <Col>
            <Button type="primary" onClick={handleClick}>
              + Add Iklan
            </Button>
          </Col>
        </Row>
      </Header>
      <Content>Content Iklan</Content>
      <Footer>Powered By Indent Team</Footer>
    </Layout>
  );
};

export default List;
