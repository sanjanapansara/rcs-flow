import { Handle, Position } from "@xyflow/react";
import { Badge, Card, ConfigProvider, Divider, Switch, Typography } from "antd";
import React from "react";

const { Text, Title } = Typography;

function MediaNode({ data, selected }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            headerBg: "#857b7b",
            colorBorderSecondary: "#857b7b",
          },
        },
      }}
    >
      <Badge.Ribbon
        text={<div className="flex justify-start m-1">Start</div>}
        placement="start"
        style={{ marginTop: -30 }}
      >
        <Card
          title={data.templateName || "Media"}
          size="small"
          extra={<Switch size="small" />}
          cover={
            <img
              style={{ width: "100%" }}
              alt="example"
              src={
                data.imageUrl ||
                "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              }
            />
          }
          bodyStyle={{ padding: "10px" }}
          style={{
            width: 200,
            padding: "1px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            border: selected ? "1px solid#ADC0A7" : "none",
          }}
        >
          <Typography.Text>
            <strong>{data.label}</strong>
          </Typography.Text>
          <Handle type="target" position={Position.Left} />
          {/* <Title level={5} style={{ margin: "0px" }}>
          Header Title
        </Title>
        <Text type="secondary">Menu Middle Title</Text>
        <br />
        <Text type="secondary">Footer Title</Text> */}
        </Card>
      </Badge.Ribbon>
    </ConfigProvider>
  );
}
export default MediaNode;
