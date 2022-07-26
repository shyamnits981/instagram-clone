import React,{ useEffect, useState } from 'react';
import './post-view.css'
const PostView = ()=> {
    const[data,setData] = useState([])
         useEffect(()=>{
            fetch('/allpost',{
                headers:{
                    
                }
            }).then(res=>res.json())
             .then(result=>{
            setData(result.posts)
             })
            
         },[])

  return (
    
        <div className='home'>
          
          {
            data.map(item=>{
         return(        
        <div className='card home-card'>
        <h4>{item.author}</h4>
        <div className='card-image'>
            <img src={item.photo} alt='randon' /> 
         
        </div>
        <div className='card-content'>
        <i className="material-icons" style={{color:"red"}}>favorite</i>
            <h6>{item.location}</h6>
            <p>{item.description} </p>
            <input type="text" placeholder="add a comment"/>
        </div>
    </div>

             )
            })
          }
      </div>
  )
}
export default PostView;