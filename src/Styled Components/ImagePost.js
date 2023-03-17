import styled from "styled-components";

const ImagePostBox = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    width: 670px;
    overflow: visible;
    height: fit-content;
    font-size: 15px;

    @media(max-width: 800px) {
    width: 480px;
  }
`

export {ImagePostBox}