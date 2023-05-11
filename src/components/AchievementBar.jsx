import React from 'react'
import CountUp from 'react-countup';

const AchievementBar = () => {
  return (
    <div className='bg-[var(--primary-blue)]'>
        <div className='flex justify-evenly px-6 py-16'>

            <div>
                <div style={{backgroundImage: 'url("https://assets.website-files.com/62924709f48353c6d6d6a5b9/62988bac0004036a6765be90_Image%20(10).png")'}} className='w-24 h-24 md:w-40 md:h-40 lg:w-50 lg:h-50 bg-cover text-center flex justify-center items-center'>
                    <CountUp enableScrollSpy={true} className='font-["Oswald"] p-6 text-white text-3xl md:text-2xl lg:text-4xl' end={260} />   
                </div>
                <p className='text-white text-1xl text-center pt-6'>Achievements</p>
            </div>
            <div>
                <div style={{backgroundImage: 'url("https://assets.website-files.com/62924709f48353c6d6d6a5b9/62988bac0004036a6765be90_Image%20(10).png")'}} className='w-24 h-24 md:w-40 md:h-40 lg:w-50 lg:h-50 bg-cover text-center flex justify-center items-center'>
                <CountUp enableScrollSpy={true} className='font-["Oswald"] p-6 text-white text-3xl md:text-2xl lg:text-4xl' end={800} />   
                </div>
                <p className='text-white text-1xl text-center pt-6'>Volunteers</p>
            </div>
            <div>
                <div style={{backgroundImage: 'url("https://assets.website-files.com/62924709f48353c6d6d6a5b9/62988bac0004036a6765be90_Image%20(10).png")'}} className='w-24 h-24 md:w-40 md:h-40 lg:w-50 lg:h-50 bg-cover text-center flex justify-center items-center'>
                <CountUp enableScrollSpy={true} className='font-["Oswald"] p-6 text-white text-3xl md:text-2xl lg:text-4xl' end={500} />   
                </div>
                <p className='text-white text-1xl text-center pt-6'>Donations</p>
            </div>
            <div>
                <div style={{backgroundImage: 'url("https://assets.website-files.com/62924709f48353c6d6d6a5b9/62988bac0004036a6765be90_Image%20(10).png")'}} className='w-24 h-24 md:w-40 md:h-40 lg:w-50 lg:h-50    bg-cover text-center flex justify-center items-center'>
                <CountUp enableScrollSpy={true} className='font-["Oswald"] p-6 text-white text-3xl md:text-2xl lg:text-4xl' end={2000} />
                </div>
                <p className='text-white text-1xl text-center pt-6'>Followers</p>                
            </div>
        </div>
        
    </div>
  )
}

export default AchievementBar
