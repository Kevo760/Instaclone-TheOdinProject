import React, { useState, useRef }  from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop'
import { canvasPreview } from './CanvasPreview'
import { useDebounceEffect } from './UseDebounceEffect'
import { Slider } from '@mui/material'
import {BiImageAdd} from 'react-icons/bi'
import ImageUploadNavBar from './ImageUploadNavBar'
import styled from "styled-components";

const ControlButton = styled.button`
    width: 100%;
    padding: 10px;
    color: white;
    font-weight: bold;
    background-color: rgba(0, 168, 232);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: rgba(1, 80, 110);
    }
    &:active{
        background-color: rgba(0, 168, 232);
    }
    :disabled {
        background-color: silver;
  }
`

const ImageUploadBox = styled.div`
    margin-top: 40px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .hide-div {
      display: none;
    }
    .hidden {
      display: none;
    }
    .add-img-icon {
      scale: 1.6;
    }
`

const CropControlBox = styled.div`
    width: 420px;
    padding: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 5px;
`

const AddImgLabel = styled.label`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    gap: 10px;
    justify-content: center;
`

const AddImgText = styled.span`
    font-weight: bold;
`

const BottomControlBox = styled(CropControlBox)`
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
`



// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
    mediaWidth,
    mediaHeight,
    aspect
  ) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    )
  }
  

function ImageCropSection() {
  const [imgSrc, setImgSrc] = useState('')
  const previewCanvasRef = useRef()
  const imgRef = useRef()
  const blobUrlRef = useRef('')
  const [crop, setCrop] = useState()
  const [completedCrop, setCompletedCrop] = useState()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const aspect = 1 / 1

  const [test, setTest] = useState()

  

  function resetRotateScale() {
    setScale(1)
    setRotate(0)
  }

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error('Crop canvas does not exist')
    }

    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error('Failed to create blob')
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current)
      }
      // Creates the new photo and passes it to blobUrlRef
      blobUrlRef.current = URL.createObjectURL(blob)

      //  ** This function allows user to download the cropped image **


      setTest(blobUrlRef.current)
      console.log(test)
    
    })
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
      }
    },
    100,
    [completedCrop, scale, rotate],
  )



  return (
    <ImageUploadBox>
      <ImageUploadNavBar />

        <AddImgLabel htmlFor='add-img'>
            <input className='hidden' id ='add-img' type="file" accept="image/*" onChange={onSelectFile} />
            <BiImageAdd className='add-img-icon' />
            <AddImgText>Add Image</AddImgText>
        </AddImgLabel> 
   

      <CropControlBox>
        <div>
          <label htmlFor="scale-input">Scale</label>
          <Slider
            id="scale-input"
            aria-label="Always visible"
            defaultValue={1}
            step={0.01}
            min={1}
            max={10}
            disabled={!imgSrc}
            onChange={(e) => setScale(Number(e.target.value))}
        />
        </div>

        <div>
          <label htmlFor="rotate-input">Rotate</label>

          <Slider
          id="rotate-input"
          aria-label="Always visible"
          defaultValue={0}
          step={1}
          valueLabelDisplay="auto"
          min={-180}
          max={180}
          disabled={!imgSrc}
          onChange={(e) =>
            setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
          }
        />
        </div>
      </CropControlBox>

      <div>
      {!!imgSrc && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      {!!completedCrop && (
        <>
        <div>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: '1px solid black',
                objectFit: 'contain',
                width: completedCrop.width,
                height: completedCrop.height,
                display: 'none'
              }}
            />
          </div>
        </>
      )}
     </div>

     <BottomControlBox>

      <ControlButton onClick={resetRotateScale} disabled={!imgSrc}>Reset</ControlButton>

      <ControlButton onClick={onDownloadCropClick} disabled={!imgSrc}>Next</ControlButton>

     </BottomControlBox>
      
     
    </ ImageUploadBox>
  )
}

export default ImageCropSection