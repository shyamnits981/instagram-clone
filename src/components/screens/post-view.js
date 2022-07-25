
// import { useEffect, useState } from 'react';
// import './post-view.css'
// const PostView = ()=> {
 
//     const [data,setData] = useState([])
//          useEffect(()=>{
//             fetch('/allpost',{
//                 headers:{
//                     // "Authorization":"Bearer "+localStorage.getItem("jwt")
//                 }
//             }).then(res=>res.json())
//              .then(result=>{
//                 console.log(data)
//                 setData(result)
//              })
            
//          },[])

//   return (
//     <>
//         <div className='home'>
//         <div className='card home-card'>
//             <h5>Shyam</h5>
//             <div className='card-image'>
//                 <img src="https://images.unsplash.com/photo-1625335445096-e44f4ec63c37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='randon' /> 
             
//             </div>
//             <div className='card-content'>
//             <i className="material-icons" style={{color:"red"}}>favorite</i>
//                 <h6>title</h6>
//                 <p>This is a amazing </p>
//                 <input type="text" placeholder="add a comment"/>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default PostView;




//................................................................................................................


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
        <h5>{item.author}</h5>
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