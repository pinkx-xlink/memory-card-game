import React, { useState } from "react";

const Card = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            // props.setGameOver();
            alert('GAME OVER!')
        } else {
            setIsClicked(true);
            console.log('ur good bro');
        }
    };

    return (
        <h1>clicky stuff</h1>
    )
}

// second rendition
// const Photo = ({ src, alt }) => {
//     const [clickCount, setClickCount] = useState(0);

//     const handleClick = () => {
//         setClickCount(clickCount + 1);
//         console.log(`click count: ${clickCount}`);
//     };

//     return (
//         <div>
//             <img src={src} alt={alt} onClick={handleClick} style={{ cursor: 'pointer' }} />
//             <p>Clicks: {clickCount}</p>
//         </div>
//     )
// }


// first rendition
// const ClickableImage = (event) => {
//     const [clickCount, setClickCount] = useState(0);
    
//     const handleClick = () => {
//         // let prevCount;
//         setClickCount(prevCount => prevCount + 1);
//         if (clickCount + 1 === 2) {
//             alert('Clicked twice!! ): the Hidden Leaf has exploded.');
//             // Add a gameover screen with a pic of Jiraiya Boy
//             setClickCount(0);
//         }
//     };
//     return (
//        <h2> LOSER :P </h2> 
//     )
// }

//export default ClickableImage;

export default Card;