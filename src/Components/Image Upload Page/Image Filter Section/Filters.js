import React, { useEffect } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../../../Styles/instagram.min.css'



const FiltersStyles = styled.div`
  width: 480px;
  height: 170px;
  margin: 10px auto;
  background-color: rgb(173, 181, 189);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`

const FilterBox = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
`

const FilterImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 4px;
`

const sliderStyle = {
  width: '380px'
}



const Filters = ({ filterClass, setFilterClass, imgSrc }) => {
    
  
    const filters = [
      { name: 'Normal', class: 'filter-normal'},
      { name: 'Amaro', class: 'filter-amaro'},
      { name: 'Ashby', class: 'filter-ashby'},
      { name: 'Brannan', class: 'filter-brannan'},
      { name: 'Clarendon', class: 'filter-clarendon'},
      { name: 'Gingham', class: 'filter-gingham'},
      { name: 'Inkwell', class: 'filter-inkwell'},
      { name: 'Lofi', class: 'filter-lofi'},
      { name: 'Poprocket', class: 'filter-poprocket'},
      { name: 'Sutro', class: 'filter-sutro'},
      { name: 'Skyline', class: 'filter-skyline'},
      { name: 'Willow', class: 'filter-willow'},
      { name: 'Xpro', class: 'filter-xpro-ii'},
    ]
      
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
  
    return (
      <FiltersStyles>
        <Slider {...settings} style={sliderStyle}>
          {filters.map((filter, index) => {
            return (
              <div key={index}>
                <FilterBox 
                  className={`filter-box ${
                    filterClass === filter.class ? 'filter-selected' : ''
                  }`}
                  onClick={() => setFilterClass(filter.class)}
                >
                    <FilterImg
                      className={filter.class}
                      src={imgSrc}
                      alt={filter.name}
                    />
                  
                  <div className="filter-name">
                    <p>
                      <strong>{filter.name}</strong>
                    </p>
                  </div>
                </FilterBox >
              </div>
            )
          })}
        </Slider>
      </FiltersStyles>
    )
  }

  export default Filters