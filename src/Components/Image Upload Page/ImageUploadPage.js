import React from 'react'
import ImageCropSection from './Image Crop Section/ImageCropSection'
import ImageDetailSection from './Image Detail Section/ImageDetailSection'
import ImageFilterSection from './Image Filter Section/ImageFilterSection'
import styled from "styled-components";

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

  return (
    <ImageUploadBox>
      <ImageFilterSection />
    </ImageUploadBox>
  )
}

export default ImageUploadPage