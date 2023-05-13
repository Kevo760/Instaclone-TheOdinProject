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
import profile from '../../../images/profile.jpg'
import { useUploadedImg } from '../../../Context/ImgUploadContext';


const ImageFilterSectionBox = styled.div`
  width: 500px;
  height: fit-content;
  margin-top: 30px;
  display: block;
`

function ImageFilterSection() {
  const [filterClass, setFilterClass] = useState('filter-normal')
  const upImg = useUploadedImg()

  return (
    <ImageFilterSectionBox>
      <ImageFilterTopNav />

      <ImgWrapper filterClass={filterClass} imgSrc={upImg} />
      <Filters filterClass={filterClass} setFilterClass={setFilterClass} imgSrc={upImg}/>
    </ImageFilterSectionBox>
  )
}

export default ImageFilterSection