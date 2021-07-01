import styled from 'styled-components';

export default function Headline({
  Headlinetext1,
  Headlinetext2,
  Headlinetext3,
}) {
  return (
    <HeadlineWrapper>
      <HeadlineTag>{Headlinetext1}</HeadlineTag>
      <HeadlineTag>{Headlinetext2}</HeadlineTag>
      <HeadlineTagRight>{Headlinetext3}</HeadlineTagRight>
    </HeadlineWrapper>
  );
}

const HeadlineWrapper = styled.h4`
  width: 328px;
  margin: 90px 0px 10px 15px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  background-color: white;
  z-index: 100;
`;

const HeadlineTag = styled.span`
  width: 2.5rem;
`;

const HeadlineTagRight = styled.span`
  width: 5rem;
  text-align: right;
`;
