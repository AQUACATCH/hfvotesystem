import React from 'react'
import { useState } from 'react'
import { getMaxVotes } from '../utils'

const VoteForm = ({ options, setOptions, selected, setSelected}) => {
    const [name, setName] = useState('')
    const [msg, setMsg] = useState('')
    console.log(name)
    const HandleVote = ((e) => {
        e.preventDefault()
        console.log(name.trim())
        if (!options.some(({ votes }) => votes.includes(name.trim())) && name.trim()) {
            console.log("sikeres")
            setMsg(null)
            setOptions(prev => prev.map(obj=> obj.id == selected ? {...obj, votes:[...obj.votes, name]} : obj))
            setSelected(null)
            
        }
        else {
            if(name == null || !name.trim()){
                setMsg("Add meg a neved")
            }
            else{
                setMsg("Már szavaztál!")
            }
        }
    })

    return (
        <div className='border-white text-left text-white border-[0.5px] text-xl flex flex-col gap-4 p-4 rounded'>
            <p>A következőre szavazok: <span className='font-bold capitalize'>{options.find((obj) => obj.id == selected).text}</span></p>
            <form onSubmit={HandleVote}>
                <p>Add meg a neved:</p>
                <input className='p-3 border-gray border-[0.5px] w-full h-10' type="text" onChange={e => setName(e.target.value)} />
                <p className='text-red-600 w-full h-10'>{msg}</p>
                <div className='flex justify-between'>
                    <button className='bg-gray-500 rounded-xl p-3' type='submit'>Mentés</button>
                    <button className='bg-gray-200 rounded-xl p-3 text-black' onClick={() => setSelected(null)}>Mégsem</button>
                </div>
            </form>
        </div>
    )
}

export default VoteForm