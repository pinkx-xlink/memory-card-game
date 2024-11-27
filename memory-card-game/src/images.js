import React, { useState, useEffect } from "react";


const Gallery = () => {
  const narutoImgUrl = "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
const sasukeImgUrl = "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png"; 
const tsunadeImgUrl = "https://static.wikia.nocookie.net/naruto/images/b/b3/Tsunade_infobox2.png";
const shikamaruImgUrl = "https://static.wikia.nocookie.net/naruto/images/4/44/Shikamaru_Part_I.png";
const zabuzaImgUrl = "https://static.wikia.nocookie.net/naruto/images/3/37/Zabuza_Momochi.png";
const asumaImgUrl = "https://static.wikia.nocookie.net/naruto/images/7/7c/Asuma.png";
const gamatatsuImgUrl = "https://static.wikia.nocookie.net/naruto/images/8/81/Gamatatsu.png";
const kankuroImgUrl = "https://static.wikia.nocookie.net/naruto/images/7/7d/Kankur%C5%8D1.png";
const hinataImgUrl = "https://static.wikia.nocookie.net/naruto/images/9/97/Hinata.png";
const chojiImgUrl = "https://static.wikia.nocookie.net/naruto/images/7/7d/Ch%C5%8Dji_Akimichi.png";
const kakashiImgUrl = "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png";
const gaaraImgUrl = "https://static.wikia.nocookie.net/naruto/images/2/20/Gaara_in_Part_I.png";

const imgArray = [narutoImgUrl, sasukeImgUrl, tsunadeImgUrl, shikamaruImgUrl, zabuzaImgUrl, asumaImgUrl, gamatatsuImgUrl, kankuroImgUrl, hinataImgUrl, chojiImgUrl, kakashiImgUrl, gaaraImgUrl];
const [selectedImages, setSelectedImages] = useState([]);

 
  const getRandomImages = () => {
    const shuffled = imgArray.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setSelectedImages(selected);
    // return shuffled.slice(0, num);
  }

  // const [randomImages, setRandomImages] = useState([]);
  // useEffect(() => {
  //   setRandomImages(getRandomImages(imgArray, 3));
  // }, []);
  
  return (
    <div class="gallery-container">
      <button class="random-img-btn" onClick={getRandomImages}>Get Random img</button>
      <div class="card-container">
        {selectedImages.map((image, index) => (
          <img key={index} src={image} alt={`Random ${index}`} />
        ))}
      </div> 
    </div>
  );
};

export default Gallery;