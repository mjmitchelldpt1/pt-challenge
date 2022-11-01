import { useState, useEffect } from "react"

function Timer() {
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(0)
  const [isTimerActive, setIsTimerActive] = useState(false)
  

  const handleResetTimer = () => {
    setIsTimerActive(false)
    setSeconds(0)
    setMinutes(10)
  }

 
  useEffect(() => {
    let timeInterval = setInterval(() => {
      //function to conrol time flow goes here
      clearInterval(timeInterval)
      console.log('top dog')
      if (isTimerActive  && minutes >= 0 && seconds >= 1) {
        setSeconds(prevSeconds => prevSeconds - 1)
        console.log('second seconds')
      } else if (minutes === 0 && seconds === 0) {
        setIsTimerActive(false)
      } 
        if (minutes <= 0 && seconds === 1) {
          setIsTimerActive(false)
        } else if (minutes > 0 && seconds === 0 && isTimerActive) {
          setMinutes(prevMinutes => prevMinutes -1)
          setSeconds(59)
        } else {
          console.log('the ELSE')
        }
    }, 1000)
  
    return () => {
      clearInterval(timeInterval)
      console.log('Cleanup')
    }
  }, [isTimerActive, minutes, seconds])
  
  
    
   
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
      
    </main>
  )
}

export default Timer