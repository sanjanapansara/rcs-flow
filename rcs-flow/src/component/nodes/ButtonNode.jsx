/* eslint-disable react/prop-types */
import React from "react";
import { Handle, Position } from "@xyflow/react";
import { Button, Card, ConfigProvider, Flex, Switch, Typography } from "antd";
const ButtonNode = ({ data ,selected}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            headerBg: "#ADB3E8",
            colorBorderSecondary: "#acb2e9",
          },
        },
      }}
    >
      <Card
        title="Send Button Message"
        extra={<Switch size="small"/>}
        size="small"
        bodyStyle={{ padding: "10px" }}
        style={{
          width: 200,
          padding: "0px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          border: selected ? "1px solid #ADB3E8" : "none",
        }}
      >
        <Handle type="target" position={Position.Left} />
        <Typography.Text>{data.label}</Typography.Text>
        <Flex justify="space-around">
          <Button
            size="small"
            block
            style={{ background: "#adafce", color: "black" }}
          >
            <Handle
              type="source"
              position={Position.Right}
              isConnectable={true}
            />
            <Typography.Text>Deafult Button</Typography.Text>
          </Button>
        </Flex>
      </Card>
    </ConfigProvider>
  );
};
export default ButtonNode;