import { useState } from 'react'
import { motion , useAnimation, AnimatePresence, useCycle } from "framer-motion"
import './App.css'

function App() {
  const [check, changeCheck] = useState(true)
  const [wait, changeWait] = useState(false)
  const titleControl = useAnimation();
  const cycle = useCycle();
  let handleClick = ()=>{
    titleControl.start({
      x:0,
      y:"-260%"
    })
    changeCheck(false)
    changeWait(false)
    setTimeout(()=>{
      changeWait(true)
    },1200)
  }
  return (
    <div id='container'
    style={{
      overflow:"hidden"
    }}>
      <motion.div id='title'
        initial={{x:0,y:0}}
        animate={titleControl}
        transition={{duration:0.3,ease:"easeOut"}}
        onClick={handleClick}
        >
        Title
      </motion.div>
      <AnimatePresence>
        {check && <motion.div id='podium'
          onClick={handleClick}
          initial={{y:0}}
          exit={{y:"50vh"}}
          transition={{duration:0.4}}
          >
          podium
        </motion.div>}

      </AnimatePresence>
      {wait &&<div id='animation'>
      <motion.div id='firstPlace'
        initial={{y:"120%"}}
        animate={{y:["120%","0%","0%","0%"],scale:[1.2,1.2,1.2,1.02]}}
        transition={{duration:3,delay:6}}
      >
        <motion.div
          animate={{
            rotate:[-50,0,0,50],
            y:[0,20,20,0],
            x:[-20,0,0,20]
          }}
          transition={{repeat:Infinity,repeatType:'reverse',duration:1,ease:'linear'}}
        >username</motion.div>
        <div id='firstContent'>
          <img src="/vite.svg" alt="" />
          <p>2501</p>
          <p>12 out of 20</p>
        </div>
      </motion.div>
      <motion.div id='secondPlace'
        initial={{y:"120%",x:"100%"}}
        animate={{y:["120%","0%","0%","0%"],x:["100%","100%","100%","0%"],scale:[1.2,1.2,1.2,1.02]}}
        transition={{duration:3,delay:3}}
      >
        <motion.div
          
        >username</motion.div>
        <div id='secondContent'>
          <img src="/vite.svg" alt="" />
          <p>2201</p>
          <p>10 out of 20</p>
        </div>
      </motion.div>
      <motion.div id='thirdPlace'
        initial={{y:"120%",x:"-100%"}}
        animate={{y:["120%","0%","0%","0%"],x:["-100%","-100%","-100%","0%"],scale:[1.2,1.2,1.2,1.02]}}
        transition={{duration:3}}
      >
        <motion.div
          
        >username</motion.div>
        <div id='thirdContent'>
          <img src="/vite.svg" alt="" />
          <p>1501</p>
          <p>9 out of 20</p>
        </div>
      </motion.div>
        </div>}
    </div>
  )
}

export default App