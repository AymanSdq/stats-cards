import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <main className='w-full h-screen bg-veryDarkBlue flex justify-center items-center'>

        <section className='w-[80%] bg-DarkDesBlue sm:flex rounded-lg sm:flex-row-reverse'>
          {/* Left */}
          <div className='sm:w-1/2 relative'>
            <img className='w-full rounded-t-lg sm:rounded-b-lg max-sm:h-[250px]' src="/image-header-desktop.jpg" alt="image" />
            <div className=' absolute top-0 left-0 right-0 rounded-lg bottom-0 bg-SoftViolet opacity-40'>
            </div>
          </div>
          {/* Right */}
          <div className='sm:w-1/2 max-sm:text-center flex justify-center items-center flex-col gap-10 sm:px-20 px-10 sm:py-16 py-6 inter'>

            <h1 className='text-4xl font-bold text-white'>Get <span className=' text-SoftViolet'>insights</span> that help your business grow.</h1>

            <p className=' text-SlightTranspWhite text-sm'>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
              experience, and overall efficiency.</p>

            <div className='flex justify-between max-sm:gap-4 max-sm:flex-col w-full'>
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
          
        </section>

      </main>
    </>
  )  
}

export default App
