import { useState } from 'react'
import './App.css'
import VoteList from './components/VoteList'
import VoteResult from './components/VoteResult'
import { optionList } from './data'
import VoteForm from './components/VoteForm'
import { motion } from "motion/react"
import { getMaxVotes } from './utils'

function App() {
  const [count, setCount] = useState(0)
  const [options, setOptions] = useState(optionList)
  const [selected, setSelected] = useState(null)

  const title='Hova menjünk osztálykirándulásra?'.split('')
  return (
    <div className='bg-gray-800 text-center text-white min-h-screen'>
      <h1 className='p-4 text-3xl'>
        {title.map((letter, index)=>
        <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                scale: { type: "spring", visualDuration: 10, bounce: 10 },
                delay:index/40
            }}
        >{letter}</motion.span>
        )}
      </h1>
      <div className="flex flex-wrap max-w-[1200px] mx-auto justify-between gap-3">
        <div className='flex-2'>
          <VoteList options={options} selected={selected} setSelected={setSelected}/>
        </div>
        <div className='flex-1 flex flex-col gap-4 sticky'>
          <VoteResult options={options} />
          {selected != null && <VoteForm options={options} setOptions={setOptions} selected={selected} setSelected={setSelected}/>}
        </div>
      </div>
    </div>
  )
}

export default App
