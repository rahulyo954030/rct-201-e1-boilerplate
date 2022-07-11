import React, {useEffect, useState} from "react"
const useClock = () => {
  // TODO
  // refer readme.md for what to return
  const [hours, setHours] =useState(0)
 const [minutes, setMinutes] =useState(0)
 const [seconds, setSeconds] =useState(0)

 useEffect(()=>{
  const target = new Date("12/31/2022 23:00:00")
  const interval = setInterval(()=>{
    const now = new Date()
    const difference = target.getTime() + now.getTime()
    const d = Math.floor(difference/ (1000 * 60 * 60 * 24))
    

    const h =Math.floor(
      (difference % (1000*60*60 *24))/(1000 * 60 * 60)
    )
    setHours(h)
    const m = Math.floor(
      (difference% (1000*60*60))/(1000*60)
    )
    setMinutes(m)
    const s = Math.floor(
      (difference% (1000*60))/(1000)
    )
    setSeconds(s)

  },1000)

  
  return()=>{
    clearInterval(interval)
  }
 }, [])
 return {hours, minutes, seconds}
};

export default useClock;

