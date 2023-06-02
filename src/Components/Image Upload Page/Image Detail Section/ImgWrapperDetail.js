import React from 'react'
import styled from 'styled-components'
import '../../../Styles/instagram.min.css'


const ImgWrapperStyles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: auto;
    .img-container {
        width: 100%;
        height: 100%;
        margin: auto;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`

function ImgWrapperDetail({ filterClass, imgSrc}) {
  return (
    <ImgWrapperStyles>
            <figure className='img-container'>
                <img
                    className={filterClass}
                    src={imgSrc}
                    alt=''
                />
            </figure>
        </ImgWrapperStyles>
  )
}

export default ImgWrapperDetail