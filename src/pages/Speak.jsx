import React from 'react'
import { languages } from '../Languages'
import { FaPlay } from "react-icons/fa";

const Speak = () => {

  function listVoices() {
    const voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, index) => {
        console.log(`${index + 1}: name_${voice.name} lang_(${voice.lang}) `);
    });
}



  // speak function
  function listenToSpeech() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'hi-IN';  // Set the language
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        console.log("You said: ", speechResult);
        // Handle the recognized text
        //speakText("You said " + speechResult);

        function speakText1(text) {
          const synthesis = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(text);
          const voices = synthesis.getVoices();
          utterance.voice = voices[167]
        utterance.lang='hi-IN'
         
          synthesis.speak(utterance);
      }
      
      // Usage example
      setTimeout(speakText1(speechResult),500);

    };

    recognition.onerror = (event) => {
        console.error("Error occurred in recognition: ", event.error);
    };
}

// end

  return (
    <div className='w-screen flex items-center justify-center'>
      <div className='flex flex-col w-11/12 sm:w-4/12 items-center justify-around gap-5 bg-white p-5 rounded-xl shadow-lg'>
        <select name="" id="" className='w-4/12 bg-black text-yellow-500 p-1 rounded-lg'>
          {languages.map((x)=>{
            return <option value={x.name} key={x.name}>{x.name}</option>
          })}
        </select>
        <button className='bg-black text-yellow-400 p-2 rounded-2xl flex items-center justify-center w-10 h-10' onClick={listenToSpeech}>{<FaPlay/>}</button>
        <select name="" id="" className='w-4/12 bg-black text-yellow-500 p-1 rounded-lg'>
          {languages.map((x)=>{
            return <option value={x.name} key={x.name}>{x.name}</option>
          })}
        </select>
      </div>
    </div>
  )
}

export default Speak
