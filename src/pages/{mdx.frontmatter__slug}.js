import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Planet = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <main className='flex flex-row space-between items-center w-full'>
        <article className='w-2/3 flex items-center justify-center'>
          <img className='py-24' src={data.mdx.frontmatter.img_planet.publicURL} alt={data.mdx.frontmatter.img_planet_alt}/>
          </article>
      <section className='flex flex-col items-start justify-between w-1/3'>
        <h1 className='font-antonio uppercase text-3xl'>{data.mdx.frontmatter.title}</h1>
        <p className='text-base'>{data.mdx.frontmatter.overview}</p>
        <p>Source: <a href={data.mdx.frontmatter.overview_source}>Wikipedia</a></p>
        {children}
      </section>
      </main>
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