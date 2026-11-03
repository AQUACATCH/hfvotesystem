import React from 'react'

const VoteResult = ({ options }) => {
    console.log(options)
    return (
        <div className='bg-gray-600 rounded text-2xl p-3 text-white min-h-[content]'>
            <h3 className='text-3xl'>Eredmény</h3>
            <div className='w-75 mx-auto'>
                <ul className='text-left list-disc'>
                    {options.map(({ id, text, votes }) =>
                        <li key={id}>{text}: {votes.length} szavazat</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default VoteResult