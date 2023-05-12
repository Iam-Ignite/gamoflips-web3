import React, { useState } from 'react'

function GameSection() {
    const [selectedMode, setSelectedMode] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleSwitch = (event) => {
        setSelectedMode(event.target.value);
    };
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const ethData = [
        {
            id: 1,
            currency: 'ETH',
            eth: "0.05",
        },
        {
            id: 2,
            currency: 'ETH',
            eth: "0.10",
        },
        {
            id: 3,
            currency: 'ETH',
            eth: "0.25",
        },
        {
            id: 4,
            currency: 'ETH',
            eth: "0.50",
        },
        {
            id: 5,
            currency: 'ETH',
            eth: "0.75",
        },
        {
            id: 6,
            currency: 'ETH',
            eth: "1.00",
        },
    ]

    return (
        <div className='flex justify-center items-center pb-5'>
            <div className=' flex flex-col items-center border-2 mt-10 py-10 rounded-md border-[#FDE047]  to-blue-900 from-violet-800 bg-gradient-to-br w-[90%] md:w-[28%] justify-center scroll-m-0 overflow-y-scroll  scroll-smooth'>
                <h1 className='game-font text-[#FDE047] text-2xl md:text-3xl pb-5 font-extrabold'>Coin Flip</h1>
                <img src="/casino-logo.webp" className='h-36' alt=",ndsvnd" />

                <div className="flex md:my-5 mt-5 gap-3">

                    <div className=' '>
                        <label className='containers '>
                            <input className='hidden'
                                type="checkbox"
                                name="mode"
                                value="heads"
                                checked={selectedMode === 'heads'}
                                onChange={handleSwitch}
                            />
                            <span className='checkmark text-xl font-extrabold  md:text-base game-font'>
                                Heads
                            </span>
                        </label>
                    </div>
                    <div className=' mb-6 md:mb-0'>
                        <label className='containers '>
                            <input className='hidden'
                                type="checkbox"
                                name="mode"
                                value="tails"
                                checked={selectedMode === 'tails'}
                                onChange={handleSwitch}
                            />
                            <span className='checkmark text-center text-xl font-extrabold md:text-base game-font'>
                                Tails
                            </span>
                        </label>
                    </div>

                </div>
                <div className="border-b mb-5 w-4/5 border-[#ffffff1d]"></div>

                <h1 className='game-font text-[#FDE047] text-2xl font-bold mb-4 md:mb-5'>Choose bet</h1>

                <div className="grid grid-cols-3 gap-2 ">

                    {
                        ethData.map(eth => (

                            <div key={eth.id} className=' mb-6 md:mb-5'>
                                <label className='containers'>
                                    <input className='hidden'
                                        type="checkbox"
                                        name="optionEth"
                                        value={eth.eth}
                                        checked={selectedOption === eth.eth}
                                        onChange={handleOptionChange}
                                    />
                                    <span className='checkmark p-3 game-font text-sm font-extrabold md:text-xs'>
                                        {eth.eth} {eth.currency}
                                    </span>
                                </label>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-center">
                    <div className=' px-3 mb-6 md:mb-5'>
                        <label className='containers'>
                            <input className='hidden'
                                type="checkbox"
                                name="optionEth"
                                value="all"
                                checked={selectedOption === "all"}
                                onChange={handleOptionChange}
                            />
                            <div className="border-b mb-5 w-full my-5 border-[#ffffff1d]"></div>
                            <span className='checkmark w-[17rem]  border-2 border-[#FDE047] w-100  font-extrabold p-3 game-font text-sm md:text-sm'>
                                Flip
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameSection