import { useState, useHistory } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Signup=()=>{
const history = useHistory
const [name, setName] = useState("")
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")

const PostData =()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html:"Invalid email", classes:"#e91e63 pink"})
       return
    }
    fetch("http://localhost:2020/signup",{
        method: "Post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:"",
            password:"",
            email:""
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.error){
            M.toast({html: data.error, classes:"#ef9a9a red lighten-3"})
        }else{
            M.toast({html:data.message, classes:"#e91e63 pink"})
             history.push('/signin')
        }
    }).catch(err=>{
        console.log(err)
    })
    
}


    return(
<div className='mycard'>
<div className='card auth-card'>
    <h2>Instaclone</h2>
    <input type="text" placeholder="name"  value={name} onChange={(e)=>setName(e.target.value)} />
    <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

    <button className='btn waves-effect waves-light'onClick={()=>PostData()}>Signup</button>

<h5>
    <Link to="signin">Alredy have an account?</Link>
</h5>
</div>
</div>
)
}
export default Signup;