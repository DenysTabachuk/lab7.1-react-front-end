import React, { useState } from 'react';
import InteractiveImage from './InteractiveImage';

export default function Images(){
    const kyivCityImage = "https://www.rbc.ua/static/img/k/i/kiev_skyline_beautiful_fiery_sunset_ukraine_monument_motherland_650x410.jpg";
    const [images, setImages] = useState([kyivCityImage]);
    

    function handleFileChange(event){
        const file = event.target.files[0];
        if (file){
            setImages( [...images, URL.createObjectURL(file) ])
        }
    }

    function handleButtonClick(){
        document.getElementById("file-input").click();
    }

    function handleDelete(index){
        const newImages = [...images]; 
        newImages.splice(index, 1); 
        setImages(newImages); 
    }


    return (

        <div id = "images-block">
            <h2 className = "centered-heading">Фото</h2>

         
            <div id="images-container">
            {images.length > 0 ?
                <>
                {images.map( (image, index) => (
                    <InteractiveImage 
                    index={index}
                    key={index}
                    src = {image}
                    onDelete={handleDelete}/>
                ) )}
                </>
                : <big>Додайте зображення</big>
            }
            </div>
           

            <div id = "upload-button-container">
                <button className = "button-9" id = "upload-button" onClick={handleButtonClick}>Додати фото</button>
                <input type="file" id="file-input" accept="image/*" onChange={handleFileChange} />
            </div>
        </div>
    );
}
