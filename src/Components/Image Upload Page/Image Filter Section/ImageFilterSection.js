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
import { useUploadedImg } from '../../../Context/ImgUploadContext';
import { useShowDetailSection } from '../../../Context/ImgPageHandlerContext';


const ImageFilterSectionBox = styled.div`
  width: 500px;
  height: fit-content;
  margin-top: 30px;
  display: block;
`

function ImageFilterSection() {
  const [filterClass, setFilterClass] = useState('filter-normal')
  const [showImg, setShowImg] = useState()
  const filterImgRef = useRef()

  const upImg = useUploadedImg()
  const showDetailSection = useShowDetailSection()

  const test =  async() => {
    console.log(filterImgRef)
    const imgData = await htmlToImage.toJpeg(filterImgRef.current)
    setShowImg(imgData)
  }

  return (
    <ImageFilterSectionBox>
      <ImageFilterTopNav />
      <button onClick={test}>Click Me</button>

      {
        showImg ?
        <img src={showImg}/>
        :
        null
      }

    <ImgWrapper filterClass={filterClass} imgSrc={upImg} />
      
      <Filters filterClass={filterClass} setFilterClass={setFilterClass} imgSrc={upImg}/>
    </ImageFilterSectionBox>
  )
}

export default ImageFilterSection