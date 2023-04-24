import React from 'react'
import styled from "styled-components"
import { CircularProgress } from '@mui/material'


const LoadingSection = styled.div`
  position: absolute;
  top: 50%;
`



function LoadingBox() {
  return (
    <LoadingSection>
        <CircularProgress />
    </LoadingSection>
  )
}

export default LoadingBox