import styled from "styled-components";

const CircleProfileSmall = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    image-rendering: crisp-edges;
`

const CircleProfileLarge = styled(CircleProfileSmall)`
    width: 100px;
    height: 100px;

    @media(max-width: 800px) {
    width: 70px;
    height: 70px;
  }
`

export {CircleProfileSmall, CircleProfileLarge}