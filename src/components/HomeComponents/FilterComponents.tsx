import React from 'react'
import "./FilterComponents.scss"
import { RxCross2 } from "react-icons/rx";
import { IoSearchCircle } from "react-icons/io5";


const FilterComponents = () => {
  return (
    <>
    <div className='filter_components'>
        <div className='filter_section'>
            <div className='location_container'>
                <div className="location_title">
                    Your Location
                </div>
                <div className="location">
                Lorem, ipsum dolor.
                </div>
            </div>
            <div className='search_container'>
                <div className="search_icon">
                    <IoSearchCircle className='icon'/>
                    <RxCross2 className='icon2'/>
                </div>
                <input type="text" className="search_input" placeholder='Search restaurant' />
            </div>
        </div>
    </div>
    </>
  )
}

export default FilterComponents