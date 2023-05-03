import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  const myPigLatinCodeHere = () => {
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      if (vowelsArray.length === 0) {
        eachWord += "ay";
      } else if (vowelsArray[0] === "y" && vowelsArray.length === 1) {
        const index = eachWord.indexOf(vowelsArray[0]);
        const prefix = eachWord.slice(0, index);
        const suffix = eachWord.slice(index);
        eachWord = suffix + prefix + "ay";
      } else if (vowelsArray.includes("u") && eachWord[eachWord.indexOf("u") - 1] === "q") {
        const index = eachWord.indexOf(vowelsArray[0]);
        const prefix = eachWord.slice(0, index + 1);
        const suffix = eachWord.slice(index + 1);
        eachWord = suffix + prefix + "ay";
      } else {
        const index = eachWord.indexOf(vowelsArray[0]);
        const prefix = eachWord.slice(0, index);
        const suffix = eachWord.slice(index);
        eachWord = suffix + prefix + "ay";
      }

      return eachWord
    })

    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    setInputTranslated(translatedWords)
  }

  const restartGame = () => {
    setUserInput("")
    setInputTranslated("")
  }
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
        <div className="page-container">
          <div className="body-container">
            <h1 className="title">Pig Latin Translator</h1>
            <div className="walking-pig-container">
              <img
                src={butcherPigImage}
                alt="pig with butcher cut names in pig latin"
                className="butcher-pig-image"
              />
            </div>
            <div>
              <audio controls>
                <source src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="audio/mpeg"/>
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="input-section">
              <h4 className= "phrase">Enter phrase to be translated:</h4>
              <input
                type="text"
                className="user-input"
                onChange={handleInput}
                value={userInput}
              />
              <br />
              <button onClick={setUpPreventDefault}>Submit</button>
              <button onClick={restartGame}>Clear</button>
            </div>
            <p className="output">{inputTranslated}</p>
          </div>
          <footer className="footer">&copy; 2022 | Coded by: Kyle & Scott</footer>
        </div>
      </>
    );
  }

export default App