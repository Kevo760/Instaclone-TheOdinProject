import React from 'react'
import styled from 'styled-components'
import SearchNavBar from './SearchNavBar'
import BottomNav from '../BottomNav'
import {MdPersonSearch} from 'react-icons/md'
import SearchUserBar from './SearchUserBar'

const SearchBox = styled.div`
    margin-top: 80px;
    margin-bottom: 40px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    
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

function SearchPage() {
  return (
    <SearchBox>
      <SearchNavBar />
      <BottomNav />

      <SearchInputBox>
        <SearchInput 
          placeholder='Search user'
        />
        <MdPersonSearch className='search-icon' />
      </SearchInputBox>

      <SearchResultBox>
      
      </SearchResultBox>

    </SearchBox>
  )
}

export default SearchPage