import React, { useState, useEffect } from "react";
import M from 'materialize-css';
// import { useHistory } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const Createpost = () => {
    // const history = useHistory();
    const Navigate = useNavigate()
    const [author, setAuthor] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    useEffect(() => {
        if (url) {
            fetch("/createpost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    author:"",
                    location:"",
                    description:"",
                    pic: url

                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.error) {
                        M.toast({ html: data.error, classes: "#ef9a9a red lighten-3" })
                    }
                    else {
                        M.toast({ html: "Created Post successfully", classes: "#e91e63 pink" })
                        // history.push('/')
                        Navigate.push("/")

                    }
                }).catch(err => {
                    console.log(err)
                })

        }
    }, [url])


    const postDetails = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "instagramclone")
        data.append("cloud_name", "daxiadpan")

        fetch("https://api.cloudinary.com/v1_1/daxiadpan/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="card input-filed"
            style={{

                margin: "10px auto",
                maxWidth: "500px",
                padding: "20px",
                textAlign: "center"
            }}
        >

                <div className="file-field input-field">
                <div className="btn ">
                    <span>Upload image</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="text" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input type="text" placeholder="descripiton" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className='btn waves-effect waves-light' onClick={() => postDetails()} >Submit POST</button>
        </div>
    )
}

export default Createpost;