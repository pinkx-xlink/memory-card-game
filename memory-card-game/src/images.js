import React, { useState, useEffect } from "react";
// import Photo from "./clickCounter";
// import ClickableImage from "./clickCounter";



const Gallery = () => {
  const imgArray = [
    {id: 'naruto', src: 'https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png', alt: 'Naruto Uzamaki'},
    {id: 'sasuke', src: 'https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png', alt: 'Sasuke Uchiha'},
    {id: 'tsunade', src: 'https://static.wikia.nocookie.net/naruto/images/b/b3/Tsunade_infobox2.png', alt: 'Lady Tsunade'},
    {id: 'shikamaru', src: 'https://static.wikia.nocookie.net/naruto/images/4/44/Shikamaru_Part_I.png', alt: 'Shikamaru'},
    {id: 'zabuza', src: 'https://static.wikia.nocookie.net/naruto/images/3/37/Zabuza_Momochi.png', alt: 'Zabuza of the Hidden Mist'},
    {id: 'asuma', src: 'https://static.wikia.nocookie.net/naruto/images/7/7c/Asuma.png', alt: 'Asuma'},
    {id: 'gamatatsu', src: 'https://static.wikia.nocookie.net/naruto/images/8/81/Gamatatsu.png', alt: 'Gamatatsu'},
    {id: 'kankuro', src: 'https://static.wikia.nocookie.net/naruto/images/7/7d/Kankur%C5%8D1.png', alt: 'Kankuro'},
    {id: 'hinata', src: 'https://static.wikia.nocookie.net/naruto/images/9/97/Hinata.png', alt: 'Hinata Hyuga'},
    {id: 'choji', src: 'https://static.wikia.nocookie.net/naruto/images/7/7d/Ch%C5%8Dji_Akimichi.png', alt: 'Choji'},
    {id: 'kakashi', src: 'https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png', alt: 'Kakashi Hatake'},
    {id: 'gaara', src: 'https://static.wikia.nocookie.net/naruto/images/2/20/Gaara_in_Part_I.png', alt: 'Gaara of the Hidden Sand'},
    // {src: '', alt: ''}
  ];
  const [cardClick, setCardClick] = useState(imgArray.map(() => false));
  
  
  const getRandomImages = (input) => {
    return input.slice().sort(() => Math.random() - 0.5);
  };

  const [clickedImages, setClickedImages] = useState([]);
  const [score, setScore] = useState(0);
  // const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState(getRandomImages(imgArray))
  // const [clickCount, setClickCount] = useState(0);
  // const HandleImgClick = (event) => {
    
  //   // let prevCount;
  //   setClickCount(prevCount => prevCount + 1);
  //   if (clickCount + 1 === 2) {
  //     console.log(event.target.alt)
  //       alert('Clicked twice!! ): the Hidden Leaf has exploded.');
  //       // Add a gameover screen with a pic of Jiraiya Boy
  //       setClickCount(0);
  //   }
  //   console.log(`You clicked ${event.target.alt}`);
  //   getRandomImages();
  //   // ClickableImage();
  //   return (
  //     <h2> LOSER :P </h2> 
  //  )
  // };

  

  // count clicks of an image
  
  let isClicked = false;
  
  const toggleCardClick = (index) => {
    setCardClick(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  //console.log(isClicked)
  const incrementScore = (image) => {
    if (clickedImages.includes(image)) {
      console.log('DONT CLICK ME AGAIN ):');
      
      return;
    }
    setScore(score + 1);
    const getImgClick = (clickedImages) => {
      clickedImages.isClicked = true;
      console.log(clickedImages.isClicked);
    }
    getImgClick(image);
    // update clicked images
    setClickedImages(current => [...current, image]);
    if (image.isClicked === true 
      // && ...
      // need to add another param to make this only be called
      // when the SAME img is clicked twice... use img.id or something
    ) {
      alert(`NOOO! You clicked twice. game over.`)
      setScore(0);
      // reset clicked images
      setClickedImages([]);
    }
    setImages(getRandomImages(imgArray));
    console.log(score);
  }
  return (
    <>
    <div class="gallery-container">
      <button class="random-img-btn" onClick={getRandomImages}>Get Random img</button>
      <div class="card-container">
        {images.map((img, index) => (
          <div key={index}>
            <button onClick={() => toggleCardClick(index)}> 
              {cardClick[index] ? 'active' : 'inactive'} 
            </button>
            <img 
            src={img.src} 
            alt={`${img.alt}`} 
            class="random-img" />
          </div>
        ))}
      </div> 
    </div>

    </>

  );
};
export default Gallery;