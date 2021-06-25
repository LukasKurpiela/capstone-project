import styled from 'styled-components';

export default function Headline({ Headlinetext }) {
  return (
    <HeadlineWrapper>
      <HeadlineTag>Coin</HeadlineTag>
      <HeadlineTag>Price</HeadlineTag>
      <HeadlineTagRight>{Headlinetext}</HeadlineTagRight>
    </HeadlineWrapper>
  );
}

const HeadlineWrapper = styled.h4`
  width: 270px;
  margin: 0px 10px 0px 40px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
`;

const HeadlineTag = styled.span`
  width: 2.5rem;
`;

const HeadlineTagRight = styled.span`
  width: 5rem;
  text-align: right;
`;
