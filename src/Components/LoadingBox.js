import React from 'react'
import styled from "styled-components"
import { CircularProgress } from '@mui/material'


const LoadingSection = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  bottom: 0;
`



function LoadingBox() {
  return (
    <LoadingSection>
        <CircularProgress />
    </LoadingSection>
  )
}

export default LoadingBox