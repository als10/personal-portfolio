import * as React from "react"
import Typewriter from 'typewriter-effect'
import {Socials} from "./Socials";

const typewriterStrings = [
    'A Student',
    'A Full Stack Developer',
    'A Machine Learning Enthusiast'
]

export const Landing = () => (
    <section class="relative inset-0 h-screen sm:top-0 lg:pl-8 xl:pl-16">
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
            <div class="absolute bottom-8 left-4">
                <Socials/>
            </div>
        </div>
    </section>
)
