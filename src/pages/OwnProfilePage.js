import React from "react";
import { useRef } from "react";
import { useState } from "react";
import UploadImage from"../components/Photo"
import ImageUpload from"../components/Photo2"


const OwnProfilePage = () => {
    const photo = useRef();
    const[picture, setPicture]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    function upload (){
        
      const PhotoUrl = photo.current.value;

        console.log(PhotoUrl)
        setPicture(PhotoUrl)
        
        
    }
    return(
    <div>
      {/* <ImageUpload/> */}
      <UploadImage/>
      
        <div style={{ width: "300px", height: "300px" }}>
          <img 
          style={{ width: "100%", padding: "5px" }}
          src={picture}
          alt=""
        />
      </div>
        <input className="input" ref={photo} type="text" placeholder="photo URL here"></input>
        <button className="btnStyle" onClick={upload}>ADD PHOTOS</button>
    </div>
)
    
    
    
    
}
export default OwnProfilePage;