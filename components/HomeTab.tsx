// components/HomeTab.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

'use client'

import Wallet from '@/icons/Wallet'
import PawsLogo from '@/icons/PawsLogo'
import Community from '@/icons/Community'
import Star from '@/icons/Star'
import Image from 'next/image'
import ArrowRight from '@/icons/ArrowRight'
import {EonixLogo} from '@/images'
import {sparkles} from '@/images'


const HomeTab = () => {
    return (
        <div className={`home-tab-con transition-all duration-300`}>
            {/* Connect Wallet Button */}
            <button className="w-full flex justify-center mt-8">
                <div className="bg-[#007aff] text-white px-3 py-0.5 rounded-full flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    <span>Connect wallet</span>
                </div>
            </button>

            {/* PAWS Balance */}
            <div className="flex flex-col items-center mt-8">
            <Image
                  src={EonixLogo}
                  alt="sparkles"
                  width={110}
                  height={110}
                />

                <div className="flex items-center gap-1 text-center">
                    <div className="text-6xl font-bold mb-1">4,646</div>
                    <div className="text-white text-2xl">ZEPHYR</div>
                </div>
                <div className="flex items-center gap-1 text-[#868686] rounded-full px-4 py-1.5 mt-2 cursor-pointer">
                    <span>NEWCOMER</span>
                    <Image
                        src={sparkles}
                        alt="sparkles"
                        width={18}
                        height={18}
                    />
                    <span>RANK</span>
                    <ArrowRight className="w-6 h-6" />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 px-4 mt-8 mb-8">
            <button
  onClick={() => window.open("https://t.me/", "_blank", "noopener,noreferrer")}
  className="shine-effect w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg px-4 py-2 flex items-center justify-between"
>
  <div className="flex items-center gap-3 font-medium">
    <Community className="w-8 h-8" />
    <span>Join our community</span>
  </div>
  <ArrowRight className="w-6 h-6 text-gray-400" />
</button>

<button
  onClick={() => window.open("https://x.com/ZephyrusLabsfun", "_blank", "noopener,noreferrer")}
  className="w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg px-4 py-2 flex items-center justify-between"
>
  <div className="flex items-center gap-3 font-medium">
    <Star className="w-8 h-8" />
    <span>X Community</span>
  </div>
  <ArrowRight className="w-6 h-6 text-gray-400" />
</button>
            </div>
        </div>
    )
}

export default HomeTab
