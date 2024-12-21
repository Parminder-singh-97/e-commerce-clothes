import React from 'react';
import { Button, message, Space } from 'antd';
const SuccessMsg = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
       
      </Space>
    </>
  );
};
export default SuccessMsg;