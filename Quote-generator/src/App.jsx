import { useEffect, useRef, useState } from 'react'
import './App.css'
// import axios from 'axios'

function App() {
  const [advice, setadvice] = useState('');
  const hasfetched = useRef(false)
  // useEffect(() => {
  //   if (!hasfetched.current) {
  //     fetchadvice()
  //     hasfetched.current = true
  //   }
  // }, [])


  const fetchadvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      // console.log(data);
      setadvice(data.slip.advice)

    }
    catch (error) {
      console.error('error in fetching')
    }


  }






  return (


    <>
      <div>
        <div>
          <h1 className='heading'>{advice}</h1>
          <button className='button'onClick={fetchadvice}>
            Give Me a Piece of Advice!
          </button>
        </div>
      </div>
    </>
  )
}

export default App
