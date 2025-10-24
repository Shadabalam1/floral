import React from 'react'

const BottomDiv = () => {
  return (
    <div id="bottomdiv" className=' mt-[20vw] flex justify-between items-start px-[8vw]'>
        <div id="part1" className='w-1/2'></div>
        <div id="part2" className='w-[40%] '>
          <h1 className=' text-[6vw] leading-none tracking-[-4px] whitespace-nowrap '>Blue Pottery <br /> Decorative <br /> Vase </h1>
          <div className='flex justify-between w-full items-center  mt-10'>
            <button  className='btn relative py-6 px-12 rounded-full border-2 text-[1vw] bg-transparent overflow-hidden'>
                <span className='inline-block relative z-40 '> Add to Cart</span></button>
            <h2 className='text-7xl'>$57</h2>
          </div>
        </div>
      </div>
  )
}

export default BottomDiv
