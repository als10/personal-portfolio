import scrollTo from 'gatsby-plugin-smoothscroll'
import * as React from "react"
import Typewriter from 'typewriter-effect'

const typewriterStrings = [
  'A Student',
  'A Full Stack Developer',
  'A Machine Learning Enthusiast'
]

export const Landing = () => (
    <section class="inset-0 h-screen sm:top-0 lg:pl-8 xl:pl-16">
      <div>
        <div class="mb-24 space-y-8">
          <div class="text-2xl md:text-4xl lg:text-5xl">
            Hi, I'm
          </div>
          <h1>
            Alston D'mello,
          </h1>
          <h3 class="text-gray-500">
            <Typewriter
              options={{
                strings: typewriterStrings,
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
        <button
          onClick={() => scrollTo(`#footer`)} 
          class="bg-black border-0 p-8 rounded-full font-bold text-white text-3xl md:text-3xl focus:outline-none hover:bg-gray-600"
        >
          Get In Touch
        </button>
      </div>
    </section>
)
