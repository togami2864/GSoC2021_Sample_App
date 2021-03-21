import styled from 'styled-components';
export const Header: React.FC = () => {
  return <HeaderWrapper>Sample Diagnostics App for Chrome OS</HeaderWrapper>;
};

const HeaderWrapper = styled.header`
  height: 64px;
  font-size: 28px;
  line-height: 44px;
  border-bottom: 2px solid #dadce0;
  padding: 10px;
`;
