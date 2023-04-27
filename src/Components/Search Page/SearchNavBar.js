import React from 'react'
import styled from 'styled-components'

const SearchTopBar = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(229, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
    z-index: 1;
`

function SearchNavBar() {
  return (
    <SearchTopBar >
        <h2>Search</h2> 
    </SearchTopBar>
  )
}

export default SearchNavBar