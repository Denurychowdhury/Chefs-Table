// import React from "react"
import Bg from '../assets/image/Bg.png'
const Banner = () => {
  return (
    <div>
      <div className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:-[35.5rem] mb-10"
        style={{backgroundImage:`url(${Bg})`}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-3/4 my-8">
            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="space-x-2">
            <button className="btn bg-[#0be58a] rounded-full hover:bg-transparent  text-white border-2 text-xl ">Explore Now</button>
            <button className="btn bg-[#0be58a] rounded-full hover:bg-transparent  text-white border-2 text-xl">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
