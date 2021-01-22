import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { Image, Locatie, Wrapper} from "../pageStyles/pageStyles"
import SEO from "../components/seo"

const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          homepageTitle,
          homepagefeaturedlocations,
          bannerfoto
        }
      }
    }
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "home", idType: URI) {
          homeMeta {
            homepagetitle
            homepagefeaturedlocations {
              ... on WPGraphql_Locatie {
                id
                locatie {
                  titel
                  foto {
                    altText
                    sourceUrl
                    imageFile {
                      childImageSharp{
                        fluid(quality: 25) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
                slug
              }
            }
            bannerfoto {
              sourceUrl
              altText
              imageFile {
                childImageSharp{
                  fluid(quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return <Layout>
    <SEO title="Home" />
    <Wrapper >
    <div className="banner">
      <Image fluid={bannerfoto.imageFile.childImageSharp.fluid}
      alt={bannerfoto.altText} />
      <h1>{homepageTitle}</h1>
    </div>
    <div className="locaties">
    <h1>Uitgelichte locaties</h1>
    <div className="locatie-items">
     {homepagefeaturedlocations.map(({locatie,id,slug})=>(
       <Locatie to={`/${slug}`} key={id} >
        <Image 
          fluid={locatie.foto.imageFile.childImageSharp.fluid}
          alt={locatie.foto.altText}
          key={id}
          />
        <div className="locatie-info">
          <p>{locatie.titel}</p>
        </div>  
      </Locatie>
     ))}
    </div>
    </div>
    </Wrapper>
  </Layout>
}

export default IndexPage
