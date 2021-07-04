import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Headline({
  Headlinetext1,
  Headlinetext2,
  Headlinetext3,
}) {
  return (
    <HeadlineWrapper>
      <HeadlineTagLeft>{Headlinetext1}</HeadlineTagLeft>
      <HeadlineTagCenter>{Headlinetext2}</HeadlineTagCenter>
      <HeadlineTagRight>{Headlinetext3}</HeadlineTagRight>
    </HeadlineWrapper>
  );
}

Headline.propTypes = {
  Headlinetext1: PropTypes.string,
  Headlinetext2: PropTypes.string,
  Headlinetext3: PropTypes.string,
};

const HeadlineWrapper = styled.h4`
  width: 335px;
  margin: 90px 0px 10px 0px;
  padding: 0 10px 10px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d7d7d7;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  background-color: white;
  left: 20px;
  z-index: 100;
`;

const HeadlineTagLeft = styled.span`
  padding-left: 2.25rem;
  text-align: left;
  position: relative;
`;

const HeadlineTagCenter = styled.span`
  position: absolute;
  padding-left: 42.5%;
`;

const HeadlineTagRight = styled.span`
  text-align: right;
  padding-right: 1.5rem;
`;
