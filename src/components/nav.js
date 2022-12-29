import * as React from 'react'
import {  Link, useStaticQuery, graphql } from 'gatsby'

const Nav = () => {
    const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {frontmatter: {position: ASC}}) {
        nodes {
          frontmatter {
            title
            slug
          }
          id
        }
      }
    }
  `)
    return (
        <nav className='w-1/2'>
        <ul className='flex flex-row justify-between items-center uppercase text-xs tracking-widest font-bold leading-6 text-White/75'>
        {
        data.allMdx.nodes.map(node => (
          <li key={node.id}>
            <h2>
              <Link to={`/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
          </li>
        ))
      }
        </ul>
        </nav>
    )
    
  }
  
  export default Nav