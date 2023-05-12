import React from 'react'
import FlipCard from './FlipCard'

function AllFlips() {
    return (
        <div className='flex justify-center items-center w-screen flex-col mt-9 px-4 md:px-16'>
            <div className=" p-5 flex items-center relative justify-between rounded-md w-full text-[#FDE047] font-extrabold h-28">
                <div className="flex flex-col items-center">
                    <h1 className='text-[#FDE047] font-extrabold game-font text-[10px] md:text-[20px] '>Game ID</h1>
                </div>
                <div className="flex md:w-2/4 justify-between">
                    <div className="flex flex-col mr-8 items-center">
                        <h2 className='game-font text-[6px] md:text-[13px]'>Total ETH </h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className='game-font text-[6px] mr-8 md:text-[13px]'>Predition</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className='game-font text-[6px] md:text-[13px]'>Game Status</h2>
                    </div>

                </div>
            </div>
            <div className="scroll-m-0 overflow-y-scroll h-[80vh] w-full pb-24 scroll-smooth">
                <FlipCard />
                <FlipCard />

            </div>
        </div>
    )
}

export default AllFlips