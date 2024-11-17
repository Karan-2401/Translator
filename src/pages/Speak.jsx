import React, { useEffect, useState } from "react";
import { languages } from "../Languages";
import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/Slices/langSlice";
import { add2 } from "../store/Slices/langSlice2";
import axios from "axios";
//api

const [res, SetRes] = useState();
const [res2, SetRes2] = useState();
const [statex, SetStatex] = useState(true);
const [p,SetP] = useState()
const [pp,SetPP] = useState()
const Options = {
  
  method: "POST",
  url: "https://free-google-translator.p.rapidapi.com/external-api/free-google-translator",
  params: {
    from: p[0].code,
    to: pp[0].code,
    query: res,
  },
  headers: {
    "x-rapidapi-key": "68c1787308msh7ea6f56f24f9ed4p163152jsn5c500b9f5ea8",
    "x-rapidapi-host": "free-google-translator.p.rapidapi.com",
    "Content-Type": "application/json",
  },
  data: {
    translate: "rapidapi",
  },
};
async function wait() {
  try {
    const response = await axios.request(Options);
    console.log(response.data);
    SetRes2(response.data);
  } catch (error) {
    console.error(error);
  }
}

//end api code
const Speak = () => {
  // speak function
  const karan = useSelector((state) => state.lang.value);
  const karan2 = useSelector((state) => state.lang2.value);
  SetP(karan)
  SetPP(karan2)
  function listenToSpeech() {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = karan[0].code; // Set the language
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      console.log("You said: ", speechResult);
      SetRes(speechResult);

      // Handle the recognized text
      //speakText("You said " + speechResult);
      SetStatex(!statex)
      function speakText1(text) {
        const synthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = synthesis.getVoices();
        let xxxx = voices.filter((x) => {
          return x.lang.includes(karan2[0].code);
        });
        console.log(xxxx);
        utterance.voice = xxxx[1];
        utterance.lang = karan2[0].code;

        synthesis.speak(utterance);
      }

      // Usage example
      setTimeout(speakText1(res2), 500);
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in recognition: ", event.error);
    };
  }

  const dispatch = useDispatch();
  useEffect(() => {
    wait()
  }, [statex]);

  // function get1(e) {
  //   let a = e.target.value;
  //   const b = languages.filter((x) => {
  //     return x.language === a;
  //   });
  //   dispatch(add(b))
  // }

  // function get2(e) {
  //   let a = e.target.value;
  //   const b = languages.filter((x) => {
  //     return x.language === a;
  //   });
  //   dispatch(add2(b))
  // }

  // end

  return (
    <div className="w-screen flex items-center justify-center">
      <div className="flex flex-col w-11/12 sm:w-4/12 items-center justify-around gap-5 bg-white p-5 rounded-xl shadow-lg">
        <select
          className="w-4/12 bg-black text-yellow-500 p-1 rounded-lg"
          onChange={(e) => {
            dispatch(add(e.target.value));
          }}
        >
          {languages.map((x) => {
            return (
              <option value={x.language} key={x.code}>
                {x.language}
              </option>
            );
          })}
        </select>
        <button
          className="bg-black text-yellow-400 p-2 rounded-2xl flex items-center justify-center w-10 h-10"
          onClick={listenToSpeech}
        >
          {<FaPlay />}
        </button>
        <select
          className="w-4/12 bg-black text-yellow-500 p-1 rounded-lg"
          onChange={(e) => {
            dispatch(add2(e.target.value));
          }}
        >
          {languages.map((x) => {
            return (
              <option value={x.language} key={x.code}>
                {x.language}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Speak;
