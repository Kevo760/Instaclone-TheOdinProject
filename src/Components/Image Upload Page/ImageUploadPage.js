import React, { useState } from 'react'
import ImageCropSection from './Image Crop Section/ImageCropSection'
import ImageDetailSection from './Image Detail Section/ImageDetailSection'
import ImageFilterSection from './Image Filter Section/ImageFilterSection'
import styled from "styled-components";
import LoadingBox from '../LoadingBox';


const ImageUploadBox = styled.div`
    margin-top: 40px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`




function ImageUploadPage() {
  const [isLoading, setIsLoading] = useState(true)


  return (
    <ImageUploadBox>
     <ImageCropSection />
    </ImageUploadBox>
  )
}

export default ImageUploadPage