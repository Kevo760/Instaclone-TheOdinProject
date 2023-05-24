import React, { useState } from 'react'
import ImageDetailNavBar from './ImageDetailNavBar'
import styled from 'styled-components';
import ImgWrapperDetail from './ImgWrapperDetail';
import { useUploadedImg } from '../../../Context/ImgUploadContext';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase';
import { useAuth } from '../../../Context/AuthContext';
import { arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'
import LoadingBox from '../../LoadingBox';
import { useNavigate } from 'react-router-dom';

const ImageDetailBox = styled.div`
    width: 480px;
    margin: 30px auto;
  `

const FormSection = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  border-radius: 5px;
  background-color: rgb(173, 181, 189);
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  textarea {
    resize: none;
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  span {
    padding: 10px 4px 4px 4px;
    color: red;
    font-weight: bold;
  }
`

function ImageDetailSection() {
  const [showErr, setShowErr] = useState(false)
  const [textValue, setTextValue] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const upImg = useUploadedImg()
  const user = useAuth()
  const displayName = user.currentUser.displayName
  const userID = user.currentUser.uid
  const navigate = useNavigate()

  const handleOnChangeText = (e) => {
    setTextValue(e.target.value)
  }
  
  const handlePostUpload = async(e) => {
    e.preventDefault()

    setIsLoading(true)
    const postRef = doc(db, 'userPost', userID)
    const mainPagePostRef = doc(db, 'mainPagePost', 'post')
    const generatePostId = uuidv4()

      try {
        const storageRef = ref(storage, displayName + '/' + generatePostId)
        const uploadTask = uploadBytesResumable(storageRef, upImg)

        uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
          setShowErr(true)
          setIsLoading(false)
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

            // Adds post object on user post
            await updateDoc(postRef, generatePostId, {
                postID: generatePostId,
                imgURL: downloadURL,
                description: textValue,
                comments: '',
                likes: [],
                timestamp: serverTimestamp(),
            })
            // adds postid to mainpage post
            await updateDoc(mainPagePostRef, {
              postID: arrayUnion({
                generatePostId
              })}
            )
            // after upload is done navigate home
            navigate('/')
          });
        }
      );
    } catch(error) {
      setShowErr(true)
      setIsLoading(false)
    }
  }


  return (
    <>
      {
        isLoading ?
        <LoadingBox />
        :
        null
      }
      <ImageDetailBox>
          <ImageDetailNavBar handlePostUpload={handlePostUpload} />
          <ImgWrapperDetail imgSrc={upImg} />

          <FormSection onSubmit={handlePostUpload}>
            <textarea
              id="img-description"
              placeholder='Add description'
              onChange={handleOnChangeText}
              rows="4"
            />
            {
              showErr ?
              <span>Something went wrong, try again.</span>
              :
              null
            }
            
          </FormSection>
          
      </ImageDetailBox>
    </>
  )
}

export default ImageDetailSection