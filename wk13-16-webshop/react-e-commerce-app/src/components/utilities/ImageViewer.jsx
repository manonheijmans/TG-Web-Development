import React, { useEffect } from 'react'


export default function ImageViewer({ current }) {


useEffect(() => {
    thumbnailViewer()
}, [])

function thumbnailViewer() {
    const thumbnails = document.querySelector(".thumbnails")
    const imgs = thumbnails.getElementsByTagName("img")
    const main = document.querySelector(".main-image")
    console.log(main)
    
    for(let i=0;i<imgs.length;i++){
      const img=imgs[i]
      
      
      img.addEventListener("click",function(){
      main.src=this.src
    })   
    }
}   
    console.log(current.images.url)

    return (
        <div className="image-viewer">
            <div className="thumbnails">
                {current.images.details.map((image) => (
                    <img src={`${image.url}`} alt="product"/>
                ))}
            </div>
        
            <img src="../assets/images/logo.png"/>
            <img className="main-image" src={current.images.details[0].url} alt="product"/>
          
        </div>
    )
}

