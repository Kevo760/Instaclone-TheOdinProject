import React, {useState, useRef} from 'react'
import '../../../Styles/instagram.min.css'
import * as htmlToImage from 'html-to-image';
import {toJpeg} from 'html-to-image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Filters from './Filters';
import ImgWrapper from './ImageWrapper';
import styled from 'styled-components';
import ImageFilterTopNav from './ImageFilterTopNav';
import { useSetImgToUpload, useUploadedImg } from '../../../Context/ImgUploadContext';
import { useShowDetailSection } from '../../../Context/ImgPageHandlerContext';


const ImageFilterSectionBox = styled.div`
  width: 500px;
  height: fit-content;
  margin-top: 30px;
  display: block;
`

function ImageFilterSection() {
  const [filterClass, setFilterClass] = useState('filter-normal')
  const filterImgRef = useRef()

  const upImg = useUploadedImg()
  const imgToUpload = useSetImgToUpload()
  const showDetailSection = useShowDetailSection()



  const handleShowDetailSection = async () => {
    const imgData = await htmlToImage.toJpeg(filterImgRef.current)
    imgToUpload(imgData)
    showDetailSection()
  }

  return (
    <ImageFilterSectionBox>
      <ImageFilterTopNav handleShowDetailSection={handleShowDetailSection}/>

      <ImgWrapper filterClass={filterClass} imgSrc={upImg} filterImgRef={filterImgRef}/>
      
      <Filters filterClass={filterClass} setFilterClass={setFilterClass} imgSrc={upImg}/>
    </ImageFilterSectionBox>
  )
}

export default ImageFilterSection