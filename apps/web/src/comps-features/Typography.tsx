import {Typography} from 'antd';
import {TitleProps} from 'antd/lib/typography/Title';
import React from 'react';

export const Title = (props: TitleProps) => {
  const {Title: AntdTitle} = Typography;
  return <AntdTitle {...props} />;
};
