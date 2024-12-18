'use client'

import { trophy } from '@/images';
import Image from 'next/image'
import {EonixLogo} from '@/images'

type LeaderboardItem = {
    wallet: string;
    balance: string;
    place: string | number;
    medal?: '🥇' | '🥈' | '🥉';
}

const LeaderboardTab = () => {
    const leaderboardData: LeaderboardItem[] = [
        { wallet: "jck883", balance: "104224", place: "🥇" },
        { wallet: "hiddgem_", balance: "100000", place: "🥈" },
        { wallet: "kenrose", balance: "98521", place: "🥉" },
        { wallet: "mathilfree", balance: "97512", place: "#4" },
        { wallet: "abbas", balance: "83222", place: "#5" },
        { wallet: "CenterProd", balance: "82333", place: "#6" },
        { wallet: "tuxeoqt", balance: "77555", place: "#7" },
        { wallet: "ladesov", balance: "58999", place: "#8" },
    ]

    return (
        <div className={`leaderboard-tab-con transition-all duration-300`}>
            {/* Header */}
            <div className="px-4">
                <div className="flex flex-col items-center mt-4">
                    <Image
                        src={trophy}
                        alt="Trophy"
                        width={80}
                        height={80}
                        className="mb-2"
                    />
                    <h1 className="text-2xl font-bold mb-2">Leaderboard</h1>
                    <div className="w-full mt-2 px-6 py-1 flex justify-between rounded-lg text-sm font-medium text-[#fefefe] bg-[#151516]">
                        <span>Total</span>
                        <span>1686 users</span>
                    </div>
                </div>

                {/* Current User Stats */}
                <div className="bg-white rounded-2xl p-6 mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 p-1.5 bg-black rounded-lg">
                                {/* Ganti logo PAWS dengan logo Eonix */}
                                <Image
                  src={EonixLogo}
                  alt="sparkles"
                  width={25}
                  height={25}
                />
                            </div>
                            <div className="text-black font-medium">
                                <div className="text-base">Your</div>
                                <div className="text-xs">4,646 ZEPHYR</div>
                            </div>
                        </div>
                        <div className="text-black">#959</div>
                    </div>
                </div>

                {/* Leaderboard List */}
                <div className="mt-4 space-y-0 rounded-t-2xl">
                    {leaderboardData.map((item, index) => (
                        <div
                            key={index}
                            className={`p-4 flex items-center justify-between border-b-[1px] border-[#222622] ${index === 0 ? 'bg-[#2d2b1b] rounded-t-2xl' :
                                index === 1 ? 'bg-[#272728]' :
                                    index === 2 ? 'bg-[#2d241b]' :
                                        'bg-[#151515]'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 p-1.5 bg-black rounded-lg">
                                    {/* Ganti logo PAWS dengan logo Eonix */}
                                    <Image
                  src={EonixLogo}
                  alt="sparkles"
                  width={25}
                  height={25}
                />
                                </div>
                                <div>
                                    <div className="text-base font-medium">{item.wallet}</div>
                                    <div className="text-sm font-medium text-[#7c7c7c]">
                                        {item.balance} ZEPHYR
                                    </div>
                                </div>
                            </div>
                            <div className={`text-base font-medium ${typeof item.place === 'string' && item.place.startsWith('#')
                                ? 'text-white'
                                : ''
                                }`}>
                                {item.place}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeaderboardTab
