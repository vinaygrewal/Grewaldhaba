import React from 'react'
import Menu from "./menuApi";
const Navbar = ({filterItem, setMenuData ,navmenuList }) => {
  return (
    <>
        <nav className='navbar'> <img src="../images/grewaldhaba.webp" alt="" />
    <div className='hotel_name' ><span>Grewal Dhaba</span></div>
            <div className='btn-group'>
            {navmenuList.map((currElement)=>{
                return ( <button className='btn-group__item' onClick={() => filterItem(currElement)} >{currElement}</button>)
            })}
               
               
            </div>
        </nav>
    </>
  )
}

export default Navbar