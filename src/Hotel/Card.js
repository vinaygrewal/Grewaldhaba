import React from 'react'

import "./style.css";
const Card = ({menuData}) => {
  return (<section className='main_card__container'>
    {menuData.map((single)=>{
        const {id,category,name,description,image}=single;
    return ( <>
    <div className='card_container ' key={id}>
    <div className='card'>
    <div className='card-body'>
    <span className='card_number card_circle subtle'  >{id}</span>
    <span className='card_author subtle'>{category}</span>
    <span className='card_title'>{name}</span>
    <span className='card_description subtle'>
     {description}
    </span>
     <div className='card_read'>read</div>
   
    </div>
<img src={image} alt="images" className='card_media' />
<span className='card_tag subtle'>Order Now</span>
    </div>
    </div>
    </>)

    })}
  </section>
   
  )
}

export default Card