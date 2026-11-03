import React from 'react'
import { getMaxVotes } from '../utils'

const VoteList = ({options, selected, setSelected}) => {
  console.log(getMaxVotes(options))
  
         
   
    
    return (
    <div className='bg-gray-600 rounded flex flex-col justify-center items-center p-4 gap-4'>
        {options.map(({id, text, imgUrl, votes})=>{ 
            const iswinner=votes.length == getMaxVotes(options) && votes.length != 0 && options.filter(({votes}) => votes.length == getMaxVotes(options)).length < 2
            return <div className={iswinner? 'border-green-500 p-4 border-[0.5px] rounded-xl': 'border-gray-400 p-4 border-[0.5px] rounded-xl'} key={id}>
                <img className='max-w-[600px] object-contain' src={imgUrl} alt={text} />
                <h2 className='text-4xl'>{text}</h2>
                <div className='w-full flex justify-end'>
                    <button onClick={()=> setSelected(id)} className='bg-gray-800 rounded-xl text-white p-3'>Szavazok</button>
                </div>
            </div>}
        )}
    </div>
  )
}

export default VoteList