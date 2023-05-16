import React, { useState } from 'react'
import ImageCropSection from './Image Crop Section/ImageCropSection'
import ImageDetailSection from './Image Detail Section/ImageDetailSection'
import ImageFilterSection from './Image Filter Section/ImageFilterSection'
import styled from "styled-components";
import { ImgUploadProvider} from '../../Context/ImgUploadContext';
import { useImgCurrentPage } from '../../Context/ImgPageHandlerContext';


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
  const showStep = useImgCurrentPage()



  return (
    <ImgUploadProvider>
        <ImageUploadBox>
          {
            showStep === 1 ?
            <ImageCropSection />
            :
            null
          }
          {
            showStep === 2 ?
            <ImageFilterSection />
            :
            null
          }
          {
            showStep === 3 ?
            <ImageDetailSection />
            :
            null
          }
        </ImageUploadBox>
    </ImgUploadProvider>
    
  )
}

export default ImageUploadPage