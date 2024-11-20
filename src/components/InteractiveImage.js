import React, { useState } from 'react';


export default function InteractiveImage({index, src, onDelete}){
    const [size, setSize] = useState({width: 100, height: 100});
    const screenWidth = window.innerWidth;

    function handleImageOnLoad(event){
        const {naturalWidth, naturalHeight  } = event.target;
        setSize({ 
            width: naturalWidth, 
            height: naturalHeight
        })
    }

    function handleInreaseSize(){
        let  newSize= { ...size};
        newSize.width *= 1.1;
        newSize.height *= 1.1;

        if (newSize.width <= screenWidth) {
            setSize(newSize);
            return
        }
      
        const proceed = window.confirm("Зображення досягло максимальної ширини екрану! Продовжити збільшення?");
        if (proceed) {
            setSize(newSize);
        } 
    }

    function handleDecreaseSize(){
        let newSize = { ...size};
        newSize.width /= 1.1;
        newSize.height /= 1.1;

        if (newSize.width <= 200) {
            const proceed = window.confirm("Зображення і так вже достатньо мале! Продовжити зменшення?");
            if (proceed) {
                setSize(newSize);
            } 
        }
      
        setSize(newSize);
    }


    return (
    <div className = "image-block">
        <div className="photo-icons">
            <img className = "icon" id = "decrease-size-icon" src="/icons/minus.png" alt="minus icon"
            onClick={handleDecreaseSize}/> 
            <img className = "icon" id = "increase-size-icon" src="/icons/plus.png" alt="plus icon"
            onClick = {handleInreaseSize}/>
            <img className = "icon" id = "delete-icon" src="/icons/trash.png" alt = "trash can icon" 
            onClick={ () => onDelete(index)}/>
        </div>

        <a href="https://kyivcity.gov.ua">
            <img className="added-image"
                alt="added img"
                src={src} 
                onLoad={handleImageOnLoad}
                style={{
                    width: `${size.width}px`,
                    height: `${size.height}px`
                }}
                />  
            </a>
    </div>
    );
}