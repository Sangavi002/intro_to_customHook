import { useTimer } from "./timerHook"
import './App.css'

function App() {
  const[timer,play,pause,stop]=useTimer(10);

  return(
    <>
    <h1 style={{textAlign:'center'}}>Timer</h1>
    <div className="timer">
      {timer}
      <br/>
      <button style={{background:'green'}} onClick={() => play()}>Play</button>
      <button style={{background:'#DEAC80'}} onClick={() => pause()}>Pause</button>
      <button style={{background:'red'}} onClick={() => stop()}>Stop</button>
    </div>
    </>
  )
}

export default App
