import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { Wrapper, Image } from '../pageStyles/pageStyles';

const locationPage = ({data}) => {
    const locatie  =  data.wpcontent.locatie.locatie;
    console.log(locatie)
    return <Layout>
    <SEO title="Locatie"/>
    <Wrapper>
        <div style={{marginTop: `90px`}}>
        <h1>{locatie.titel}</h1>
            <div className="locatie-detail">
                
                <Image fluid={locatie.foto.imageFile.childImageSharp.fluid} alt={locatie.foto.altText}/>
                <p>{locatie.straat} {locatie.huisnummer}<br/>Beveren 9120</p>
                
            </div>
            <p>{locatie.beschrijving}</p>
            
        </div>
        </Wrapper>
    </Layout>
    
}
export default locationPage

export const pageQuery = graphql`
query($id: ID!){
    wpcontent {
        locatie(id: $id, idType: ID) {
            id
                locatie {
                    beschrijving
                    fieldGroupName
                    huisnummer
                    straat
                    titel
                    foto {
                        sourceUrl
                        altText
                        imageFile {
                            childImageSharp{
                                fluid(quality: 25) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
            }
        }
    }
}
`
