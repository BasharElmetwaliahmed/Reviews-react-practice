import React, { useState } from 'react'
import data from './data'
import Image from './image';
import { TfiAngleLeft,TfiAngleRight} from "react-icons/tfi";


function Review() {
  const [index,setIndex]=useState(0);
    const {id,name,job,image,text}=data[index];

 const checkIndex=(i)=>{
      if(i>data.length-1){
        return 0;
      }
       if(i<0){
      return data.length-1;
       }
      else{
        return i;
      }

    }
  const upBtn=()=>{
    const newIndex=index+1;
    setIndex(checkIndex(newIndex))
  }
  const downBtn=()=>{
        const newIndex=index-1;
    setIndex(checkIndex(newIndex))
    

  }
    const randomBtn = () => {
    let random = Math.floor(Math.random() * data.length);
    if (random ==index) {
      random = index + 1;
    }
    setIndex(checkIndex(random));
  };

  return (
    <div className='cardcontent'>
        <Image photo={image}></Image>
        <h1>{name}</h1>
        <h3>{job}</h3>
        <p>{text}</p>
        <div className='btns'>
            <TfiAngleLeft className='logo'  onClick={downBtn}></TfiAngleLeft>
            <TfiAngleRight className='logo' onClick={upBtn}></TfiAngleRight>
        </div>
        <button onClick={randomBtn}>Random</button>
    </div>
  )
}




export default Review;