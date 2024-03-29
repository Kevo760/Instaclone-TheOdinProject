import React, { useState } from 'react'
import styled from 'styled-components'
import SearchNavBar from './SearchNavBar'
import BottomNav from '../BottomNav'
import {MdPersonSearch} from 'react-icons/md'
import SearchUserBar from './SearchUserBar'
import { collection, query, where, getDocs} from "firebase/firestore"
import { db } from '../../firebase'


const SearchBox = styled.div`
    margin-top: 80px;
    margin-bottom: 40px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    .error-msg {
      color: tomato;
      font-weight: bold;
      justify-content: center;
      display: flex;
    }
    .test-button {
      position: absolute;
      z-index: 3;
      width: 100px;
      height: 50px;
    }
`

const SearchInputBox = styled.div`
  width: 500px;
  max-width: 100%;
  position: relative;
  display: block;
  .search-icon {
    position: absolute;
    scale: 1.5;
    top: 0;
    left: 0;
    margin: 10px auto auto 15px;
    color: rgb(173, 181, 189);
  }
`

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border-radius: 6px;
  border: 1px solid rgb(173, 181, 189);
  outline: none;
`

const SearchResultBox = styled.div`
  width: 500px;
  max-width: 100%;
`

const SearchPage = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [showError, setShowError] = useState(false)

  const handleSearch = async() => {
    const userRef = collection(db, 'users')
    const q = query(userRef, where('displayName','==', username))

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      setUser(doc.data())
      });
    } catch(error) {
      setShowError(true)
    }
  }

  const handleKey = e => {
    setShowError(false)
    if(e.code === 'Enter') {
      // sets user data to null
      setUser(null)
      handleSearch()
    }
  }

  return (
    <SearchBox>
      <SearchNavBar />
      <BottomNav />
      <SearchInputBox>
        <SearchInput 
          placeholder='Enter exact username'
          id='user'
          onChange={e => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />
        <MdPersonSearch className='search-icon' />
      </SearchInputBox>

      <SearchResultBox>
        {
          user ? 
          <SearchUserBar user={user}/>
          :
          null
        }
        {
          showError ?
          <span className='error-msg'>Something went wrong try again</span>
          :
          null
        }
      </SearchResultBox>

    </SearchBox>
  )
}

export default SearchPage