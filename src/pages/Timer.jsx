import { useState, useEffect } from "react"

function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(60)
  const [isTimerActive, setIsTimerActive] = useState(false)
  

  const handleResetTimer = () => {
    setIsTimerActive(false)
    setSecondsLeft(600)
  }

 
  useEffect(() => {
    let interval = setInterval(() => {
      if(isTimerActive && secondsLeft > 0) {
      setSecondsLeft(prevTime => prevTime -1)
      } else if (!isTimerActive) {
        clearInterval(interval)
      }
  }, 10)

    return () => {
      console.log('Cleanup')
      clearInterval(interval)
    }
  }, [isTimerActive, secondsLeft])

  

  
  const minutes = Math.floor(secondsLeft / 60)
  const seconds = Math.floor(secondsLeft % 60)
    
   
  return (
    <main className='container flex flex-col bg-slate-400 min-h-full'>
      <div className="container flex justify-center">
        <p className="text-white text-9xl font-bold ordinal ">
          {minutes > 9 ? minutes :`0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}
        </p>  
      </div>
      <br />
      <div className="container flex justify-center">
        {isTimerActive ? <button className='button-primary' onClick={() => setIsTimerActive(false)}>Stop</button> :
        <button className='button-primary' onClick={() => setIsTimerActive(true)}>Start</button>}
        <button className='button-primary' onClick={handleResetTimer}>Reset</button>
      </div>
      <div>{} </div>
      
    </main>
  )
}

export default Timer