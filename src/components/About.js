import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Title } from "./Title"

const Column = ({ style, children }) => (
  <div class={`flex flex-col md:w-1/2 md:m-16 ${style ?? ""}`}>
    {children}
  </div>
)

export const About = () => (
  <section class="md:h-screen px-10 pt-10 flex flex-col md:flex-row items-center">
    <Column>
      <Title style="ml-auto">
        Who I am
      </Title>
      <p class="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus finibus quam, condimentum tincidunt erat pharetra ac. Nunc ante sapien, congue vitae felis nec, lobortis viverra augue. Integer vitae nibh vel nunc finibus placerat. Aliquam tincidunt magna eros, nec maximus neque accumsan eget. Etiam vitae convallis massa. Donec diam nulla, volutpat a rutrum nec, pulvinar sit amet neque. Donec eleifend ut magna varius condimentum. Morbi eu erat et dolor porta porttitor eget vitae mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ornare, risus id ornare sagittis, est augue convallis lectus, et aliquet magna arcu nec arcu. Donec at mollis metus. Aenean et mattis velit. Phasellus id enim magna.
      </p>
    </Column>
    <Column>
      <StaticImage
        alt="a picture of myself"
        src="../images/profile.png"
      />
    </Column>
  </section>
)
