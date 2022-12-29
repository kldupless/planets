import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
    return (
      <Layout pageTitle="The Planets">
      </Layout>
    )
  }
export const query = graphql`
query MyQuery {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="The Planets" />

export default IndexPage