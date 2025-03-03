import React, { useState, useEffect } from "react";

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
  const [cardClickCount, setCardClickCount] = useState(imgArray.map(() => (0)));
  const [score, setScore] = useState(0);

  const incrementScore = function () {
    setScore(score + 1);
  }
  const toggleCardClick = (index) => {
    if (cardClickCount[index] >= 2) {
      alert('2 cliks - GAMEOVER');
      setScore(0);
      return score
   } else if (cardClickCount[index] <= 2) {
    incrementScore();
      console.log(`Keep clickin'. Score: ${cardClickCount[index]}`);
      setCardClickCount(prevCounts => {
        prevCounts[index] = prevCounts[index] + 1
        const newCounts = [...prevCounts];
        newCounts[index] = prevCounts[index];
        console.log(cardClickCount[index])
        return newCounts;
      });
    }
    
    setCardClick(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      if (newStates[index]) {
        alert('state changed')
      }
      return newStates;
    });
    console.log(score);
  };
  

  const getRandomImages = (input) => {
    return input.slice().sort(() => Math.random() - 0.5);
  };

  const [clickedImages, setClickedImages] = useState([]);
  
  const [images, setImages] = useState(getRandomImages(imgArray))
  return (
    <>
    <h1> Score: {score} </h1>
    <div class="gallery-container">
      <div class="card-container">
        {images.map((img, index) => (
          <div key={index}>
            <button onClick={() => toggleCardClick(index)}>
              {cardClick[index] ? 'clicked' : 'not clicked'}
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