import React from 'react'
import styled from 'styled-components'


const ImgWrapperStyles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: auto;
    padding: 10px;
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

const ImgWrapper = ({ filterClass, imgSrc, filterImgRef}) => {

    return (
        <ImgWrapperStyles>
            <figure className='img-container' >
                <img
                    className={filterClass}
                    src={imgSrc}
                    alt='filtered'
                    ref={filterImgRef}
                />
            </figure>
        </ImgWrapperStyles>
    )
}

export default ImgWrapper