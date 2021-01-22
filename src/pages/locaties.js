import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { Wrapper, Image, Locatie } from '../pageStyles/pageStyles';

const Locaties = () => {
    const {
        wpcontent: {
            locaties
        }
    } = useStaticQuery(graphql`
        query {
            wpcontent {
                locaties {
                  edges {
                    node {
                      locatie {
                        titel
                        straat
                        huisnummer
                        foto {
                            altText
                            sourceUrl
                            imageFile {
                              childImageSharp{
                                fluid(quality: 25, grayscale: true) {
                                  ...GatsbyImageSharpFluid_withWebp
                                }
                              }
                            }
                        }
                        
                      }
                      slug
                    }
                  }
                }
              }
        }
    `)

        console.log(locaties.edges)
    return <Layout>
    <SEO title="Locaties"/>
    <Wrapper>
        <div style={{marginTop: `80px`}}>
            <div className="description">
                <h2>Onze woningen</h2>
                <p>Dit zijn al onze beschikbare woningen, indien u meer info wilt over een woning kan u ons altijd contacteren</p>
            </div>
            <div className="locaties">
            <div className="locatie-items">
        {locaties.edges.map(({node: {locatie,slug}}) => (
            <Locatie to={`/${slug}`} key={slug}>
                <Image fluid={locatie.foto.imageFile.childImageSharp.fluid} alt={locatie.foto.altText}/>
                <div className="locatie-info">
                    <p>{locatie.titel}</p>
                    <p>{locatie.straat} {locatie.huisnummer}</p>
                </div>
            </Locatie>
        ))}
        </div>
        </div>
        </div>

        </Wrapper>
    </Layout>
}
export default Locaties;