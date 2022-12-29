import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Planet = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.overview}</p>
      <p>Source: <a href={data.mdx.frontmatter.overview_source}>Wikipedia</a></p>
      {children}
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        overview
        img_planet_alt
        overview_source
        img_planet {
          publicURL
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default Planet