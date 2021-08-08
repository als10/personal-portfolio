import {StaticImage} from "gatsby-plugin-image"
import * as React from "react"

const Column = ({children}) => (
    <div class="flex flex-col md:w-1/2">
        {children}
    </div>
)

export const About = () => (
    <section
        id="about"
        class="flex-col md:flex-row"
    >
        <Column>
            <h4>Who am I</h4>
            <p></p>
        </Column>
        <Column>
            <StaticImage
                alt="a picture of myself"
                src="../images/profile.png"
            />
        </Column>
    </section>
)
