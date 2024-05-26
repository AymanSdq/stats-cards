import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <main className='w-full h-screen bg-veryDarkBlue flex justify-center items-center'>

        <section className='w-[80%] bg-DarkDesBlue flex '>
          {/* Right */}
          <div className='w-1/2 flex justify-center items-center flex-col gap-10 px-20 py-24 inter'>

            <h1 className='text-4xl font-bold text-white'>Get <span className=' text-SoftViolet'>insights</span> that help your business grow.</h1>

            <p className=' text-SlightTranspWhite text-sm'>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
              experience, and overall efficiency.</p>

            <div className='flex justify-between w-full'>
              <div className=''>
                <h1 className=' text-white font-bold uppercase text-xl'>10k+</h1>
                <p className='text-SlightTranspWhite uppercase text-sm'>companies</p>
              </div>
              <div className=''>
                  <h1 className=' text-white font-bold uppercase text-xl'>314</h1>
                  <p className='text-SlightTranspWhite uppercase text-sm'>templates</p>
              </div>
              <div className=''>
                <h1 className=' text-white font-bold uppercase text-xl'>12m+</h1>
                <p className='text-SlightTranspWhite uppercase text-sm'>queries</p>
              </div>
            </div>

          </div>
          {/* Left */}
          <div className='w-1/2 relative'>
            <img className='w-full' src="/image-header-desktop.jpg" alt="image" />
            <div className=' absolute top-0 left-0 right-0 bottom-0 bg-SoftViolet opacity-40'>

            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default App
