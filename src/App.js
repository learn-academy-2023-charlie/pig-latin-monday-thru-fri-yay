import React, { useState } from 'react'
import './App.css'


const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(" ")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
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

      // ACTION ITEM: your Pig Latin logic goes here!

      if (vowelsArray.length === 0) {
        // If the word has no vowels, just add "ay" to the end of the word
        eachWord += "ay";
      } else if (vowelsArray[0] === "y" && vowelsArray.length === 1) {
        // Treat "y" as a vowel if it is the only vowel in the word
        const index = eachWord.indexOf(vowelsArray[0]);
        const prefix = eachWord.slice(0, index);
        const suffix = eachWord.slice(index);
        eachWord = suffix + prefix + "ay";
      } else if (vowelsArray.includes("u") && eachWord[eachWord.indexOf("u") - 1] === "q") {
        // If the word begins with "qu", move the "u" along with the "q"
        const index = eachWord.indexOf(vowelsArray[0]);
        const prefix = eachWord.slice(0, index + 1);
        const suffix = eachWord.slice(index + 1);
        eachWord = suffix + prefix + "ay";
      } else {
        // Move the first consonants to the end of the word and add "ay"
        const index = eachWord.indexOf(vowelsArray[0]);
        const prefix = eachWord.slice(0, index);
        const suffix = eachWord.slice(index);
        eachWord = suffix + prefix + "ay";
      }

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (<>
    <div className="page-container">
      <div className="body-container">
        <h1 className="title">Pig Latin Translator</h1>
        <div className="walking-pig-container">
       
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
  )
}
export default App