import React, { useState } from 'react'

function FlipCard() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = (text) => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
    };
    return (
        <div className="border-2 border-[#FDE047] to-blue-900 from-violet-800 bg-gradient-to-br px-5 mb-2 flex items-center relative justify-between rounded-md w-full text-white h-16">
            <div className="flex items-center md:gap-8">
                <button onClick={() => handleCopyClick('text to copy')} className='cursor-pointer' title="copy">
                    {isCopied ? 'Copied!' : <svg xmlns="http://www.w3.org/2000/svg" title="copy" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg>}
                </button>
                <h1 className='text-white game-font text-[5px]  md:text-xs'>fmbdsvdbsnvdnsvbdns</h1>
            </div>
            <div className="flex justify-between w-2/4">
                <div className="flex flex-col text-[9px] md:text-lg items-center w-1/5">
                    <b>4.00</b>
                </div>
                <div className="flex flex-col text-[9px] md:text-lg items-center w-1/5">
                    <b>Heads</b>
                </div>
                <div className="flex flex-col text-[9px] md:text-lg  items-center w-1/5">
                    <b>Won</b>
                </div>

            </div>
        </div>
    )
}

export default FlipCard