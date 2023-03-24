import React,{useState} from 'react';
import Card from "./Card"

import Menu from "./menuApi";
import Navbar from './Navbar';
import Footer from './Footer';

const uniqueList= [...new Set(Menu.map((single)=> {
    return (single.category)

})),"All"]


const Restaurant = () => {
    const[menuData,setMenuData]=useState(Menu);
  const [navmenuList,setNavmenuList]=useState(uniqueList)
    const filterItem = (current) => {
        if(current==="All"){
           return setMenuData(Menu);
            
        }

        const updatedList = Menu.filter((single)=>{
            return (single.category=== current)

        })
        setMenuData(updatedList)
    }


  return (<>
<Navbar filterItem={filterItem}  setMenuData={ setMenuData} navmenuList={navmenuList} />

     <Card  menuData={menuData}   />
     <Footer />
    </>
  )
}

export default Restaurant