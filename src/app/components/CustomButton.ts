'use client'
import styled from 'styled-components';
import { Button } from 'antd';

const CustomButton = styled(Button)`
  
  border-color: #4caf50;
  &:hover {
    background-color: #45a044;
    border-color: #45a044;
  }
`;

export default CustomButton;
