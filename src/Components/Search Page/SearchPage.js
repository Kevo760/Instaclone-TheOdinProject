import React from 'react'
import styled from 'styled-components'
import SearchNavBar from './SearchNavBar'

const SearchBox = styled.div`
    margin-top: 80px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: rgb(173, 181, 189);
`

function SearchPage() {
  return (
    <SearchBox>
      <SearchNavBar />

    </SearchBox>
  )
}

export default SearchPage