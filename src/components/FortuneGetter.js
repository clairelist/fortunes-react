import React, {useState} from 'react';

//the fortune function will return a random fortune in this array!
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    //The maximum is exclusive and the minimum is inclusive
  }

  function eightBall2(array) {
      let fortune = array[getRandomInt(0,array.length)];

      //must be 8 or last one won't be displayed, because of how getRandomInt works, above
      //deprecated; now uses array length method instead of a hardcoded max
      //at some point I will migrate fortuneArr to an external data object; but as it is so small now it's fine to live in this function
      
      //console.log(fortune); 
      return fortune;
      
  }

const fortuneArr = ["Yes, definitely", "You can rely on it.", "Without a doubt.", "Most likely.", "Hmm... I'm not sure!", "Yikes. Nope.", "...Try again.", "Very doubtful.","The wheel is turning the Machine.","What did you think would happen, exactly?","Don't try that again.","You cannot kill me in any way that matters."];

const FortuneGetter=()=>{
      //DATA section:: needful | initialize state as array of fortunes
      const [fortune,setFortune] = useState('');

      //logic will look something like : invoke eightBall2, then set the returned index as our state, then display that in component

      const handleClick=()=>{
         setFortune(eightBall2(fortuneArr));
      }

      return(
          <div className='fortune'>
              <h1>
          This is a fortune-telling machine. Please treat it with the respect it deserves.
             </h1>
              <span id='click-me' onClick={handleClick}>Click me to get a new fortune!</span>
              <h2>The Machine Says:</h2>

              <p>{!fortune ? 'Looks like the machine doesn`t like you very much at all today!' : fortune}</p>

          </div>
      )
  }

export default FortuneGetter;