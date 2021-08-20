import React from "react"
import socialMediaIds from "../constants/socials.json"

export default () => (
    <div class="flex space-x-4 justify-center mb-8">
        {socialMediaIds.map(s =>
            <a href={`${s.baseUrl}${s.id}`} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path}/>
                </svg>
            </a>
        )}
    </div>
)