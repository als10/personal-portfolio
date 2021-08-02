import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Column = ({ children }) => (
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus finibus quam, condimentum tincidunt erat pharetra ac. Nunc ante sapien, congue vitae felis nec, lobortis viverra augue. Integer vitae nibh vel nunc finibus placerat. Aliquam tincidunt magna eros, nec maximus neque accumsan eget. Etiam vitae convallis massa. Donec diam nulla, volutpat a rutrum nec, pulvinar sit amet neque. Donec eleifend ut magna varius condimentum. Morbi eu erat et dolor porta porttitor eget vitae mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ornare, risus id ornare sagittis, est augue convallis lectus, et aliquet magna arcu nec arcu. Donec at mollis metus. Aenean et mattis velit. Phasellus id enim magna.</p>
    </Column>
    <Column>
      <StaticImage
        alt="a picture of myself"
        src="../images/profile.png"
      />
    </Column>
  </section>
)
