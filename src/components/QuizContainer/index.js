import styled, { css } from 'styled-components'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 450px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    ${({ showExpandedImage }) => showExpandedImage && css`margin-top: 3rem;`}
    padding: 15px;
  }
`;

export default QuizContainer