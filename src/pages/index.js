import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
    return (
      <Layout pageTitle="Planets">
        <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
        </ul>
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

export const Head = () => <Seo title="Planets" />

export default IndexPage