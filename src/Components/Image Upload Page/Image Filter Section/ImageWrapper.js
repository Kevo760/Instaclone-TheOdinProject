import React from 'react'
import styled from 'styled-components'


const ImgWrapperStyles = styled.div`
    width: 100%;
    display: flex;
    .img-container {
        width: fit-content;
        max-width: 100%;
        height: 360px;
        margin: auto;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 6px;
        }
    }
`

const ImgWrapper = ({ filterClass, imgSrc}) => {

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

export default ImgWrapper