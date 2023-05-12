import React from 'react'
import Card from '../topgamercard/Card'

export default function LeaderBoard() {
    return (
        <section>
            <h1 className='game-font text-white text-2xl mt-4 font-bold text-center mb-1'>Leaderboard</h1>
            <h3 className='game-font text-gray-400 text-sm font-bold text-center mb-6'>Our Top Gamers</h3>
            <div className='flex justify-center'>
                <div className="grid md:gap-5 scroll-m-0 overflow-y-scroll h-[75vh] pb-16 scroll-smooth px-4">

                 <Card walletId="fnkdsnkjsdnvs" totalEth="49.0" chosenText="Heads" positionNumber="1" positionAph="st"/>
                 <Card walletId="fnkdsnkjsdnvs" totalEth="43.0" chosenText="Tails" positionNumber="2" positionAph="nd"/>
                 <Card walletId="fnkdsnkjsdnvs" totalEth="42.0" chosenText="Heads" positionNumber="3" positionAph="rd"/>
                 <Card walletId="fnkdsnkjsdnvs" totalEth="40.0" chosenText="Heads" positionNumber="4" positionAph="th"/>

                </div>
            </div>
        </section>
    )
}
