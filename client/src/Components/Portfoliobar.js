import styled from 'styled-components';

export default function Portfoliobar() {
  return (
    <>
      <PortfolioBar>
        <PortfoliobarHeading>Portfolio Value:</PortfoliobarHeading>
        <PortfoliobarValue>$125,000.00</PortfoliobarValue>
      </PortfolioBar>
    </>
  );
}

const PortfolioBar = styled.div`
  margin: 105px 23px 20px 23px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  box-shadow: 0 1px 2px #87878a;
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-color: #f8f8ff;
`;

const PortfoliobarHeading = styled.span`
  margin: 5px 0;
  font-size: 12px;
`;
const PortfoliobarValue = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;
`;
