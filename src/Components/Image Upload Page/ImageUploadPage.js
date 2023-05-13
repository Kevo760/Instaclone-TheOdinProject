import React, { useState } from 'react'
import ImageCropSection from './Image Crop Section/ImageCropSection'
import ImageDetailSection from './Image Detail Section/ImageDetailSection'
import ImageFilterSection from './Image Filter Section/ImageFilterSection'
import styled from "styled-components";
import LoadingBox from '../LoadingBox';
import { ImgUploadProvider, useSetImgToUpload, useUploadedImg } from '../../Context/ImgUploadContext';


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
  const [postStep, setPostStep] = useState(1)

  const upImg = useUploadedImg()
  const setUploadImg = useSetImgToUpload()

  function showImgCropSection() {
    setUploadImg(null)
    setPostStep(1)
  }

  function showFilterSection() {
    if(!upImg) {
      setPostStep(1)
    } else {
      setPostStep(2)
    }

    setPostStep(2)
  }

  function showImgDetailSection() {
    setPostStep(3)
  }



  return (
    <ImgUploadProvider>
      <ImageUploadBox>
        {
          postStep === 1 ?
          <ImageCropSection showFilterSection={showFilterSection}/>
          :
          null
        }
        {
          postStep === 2 ?
          <ImageFilterSection />
          :
          null
        }
        {
          postStep === 3 ?
          <ImageDetailSection />
          :
          null
        }
      </ImageUploadBox>
    </ImgUploadProvider>
    
  )
}

export default ImageUploadPage