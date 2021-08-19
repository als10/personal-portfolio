import {StaticImage} from "gatsby-plugin-image"
import * as React from "react"
import {graphql, useStaticQuery} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";

const Column = ({children}) => (
    <div class="flex flex-col md:w-1/2">
        {children}
    </div>
)

export default () => {
    const data = useStaticQuery(graphql`
        query {
          mdx(frontmatter: {type: {eq: "About"}}) {
            body
          }
        }
    `)

    return <section
        id="about"
        class="flex-col md:flex-row"
    >
        <Column>
            <h4>Who am I</h4>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Column>
        <Column>
            <StaticImage
                alt="a picture of myself"
                src="../../images/profile.png"
            />
        </Column>
    </section>
}
