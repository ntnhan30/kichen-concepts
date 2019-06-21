import React from 'react';
import {Helmet} from 'react-helmet';
import{useStaticQuery, graphql} from 'gatsby'

const Head = ({title}) => {

    const data = useStaticQuery(graphql`
    query {
        site{
           siteMetadata {
               title
           } 
        }
    }
    `)
    return (
        <Helmet title= {`${title} | ${data.site.siteMetadata.title}`}>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>>
        </Helmet>
    )
}

export default Head