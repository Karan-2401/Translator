import { FaPlay } from "react-icons/fa";
import { languages } from "../Languages";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/Slices/langSlice";
import { add2 } from "../store/Slices/langSlice2";
import { stringify } from "postcss";
import axios from "axios";
import { useEffect, useState } from "react";

const Speak = () => {
  const dispatch = useDispatch();
  const res1 = useSelector((state) => state.lang.value);
  const res2 = useSelector((state) => state.lang2.value);
  const [speech, SetSpeech] = useState();
  const [data, SetData] = useState();
  const [finalData, SetFinalData] = useState();
  // generating text code
  function speak() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    try {
      const recognition = new SpeechRecognition();

      // Configuration
      recognition.lang = res1[0].code; // Language
      recognition.continuous = false; // Stops after each sentence
      recognition.interimResults = false; // No partial results

      // Start recognition
      recognition.start();

      // Event listener for recognition result
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript; // Captures the recognized text
        console.log(`You said: ${transcript}`);
        SetSpeech(transcript);

        // speaking code
      };

      // Error handling
      recognition.onerror = (event) => {
        console.error(`Error occurred in recognition: ${event.error}`);
      };

      // End event
      recognition.onend = () => {
        console.log("Speech recognition ended.");
      };
    } catch (error) {
      console.log(
        "Speech Recognition is not supported in this browser.",
        error
      );
    }
  }

  // translator

  const options = {
    method: "POST",
    url: "https://free-google-translator.p.rapidapi.com/external-api/free-google-translator",
    params: {
      from: res1[0].code,
      to: res2[0].code,
      query: speech,
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
  async function translator() {
    try {
      const response = await axios.request(options);
      console.log("translated", response.data.translation);
      SetData(response.data.translation);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    if (speech == null || undefined) {
      console.log("no speech");
    } else {
      translator();
      console.log(data, "1 check");
      console.log("run");
    }
  }, [speech]);

  // end translator

  function speakxmen() {
    const synth = window.speechSynthesis;

    // Create an utterance
    console.log(data, "2 check");
    console.log('speakxmen')
    const utterance = new SpeechSynthesisUtterance(data);

    // Configure the utterance
    utterance.lang = res2[0].code; // Language
    utterance.pitch = 1; // Pitch (0.1 to 2)
    utterance.rate = 1; // Speed (0.1 to 10)
    utterance.volume = 1; // Volume (0 to 1)

    // Speak the text
    synth.speak(utterance);
    // end of speaking code
  }

  // ending of generating text
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="flex flex-col w-11/12 sm:w-4/12 items-center justify-around gap-5 bg-white p-5 rounded-xl shadow-lg">
        <select
          className="w-4/12 bg-black text-yellow-500 p-1 rounded-lg"
          onChange={(e) => {
            let a = e.target.value;
            dispatch(add(a));
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
          onClick={speak}
        >
          {<FaPlay />}
        </button>
        <button onClick={speakxmen} className="bg-red-600 text-white p-2 rounded-md hover:bg-red-400">play voice</button>
        <select
          className="w-4/12 bg-black text-yellow-500 p-1 rounded-lg"
          onChange={(e) => {
            let a = e.target.value;
            dispatch(add2(a));
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
      {console.log(res1[0])}
      {console.log(res2)}
    </div>
  );
};

export default Speak;
