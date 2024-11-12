import { useState } from "react"
import Start from "./component/Start"
import Start2 from "./component/Start2"


function App() {
  const [state,setState] = useState(true)
  return (
    <>
      {state ? <Start action={setState}/>:<Start2/>}
    </>
  )
}

export default App
