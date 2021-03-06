import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { COLORS, FONT_FAMILIES, MEDIA_QUERIES } from "../constants"

export const Wrapper = styled.div`
    marginTop:90px;
    h1{
      text-align: center;
    }
    p{
      margin: 3rem;
    }
  .banner {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    image {
        max-width:100%;
      }
      h1{
        position: absolute;
        top: 60%;

        font-family: ${FONT_FAMILIES.TITLE};
      font-size: 3rem;
      color: black;
      text-transform: uppercase;
      }
    

    .inner-div {
      display: flex;
      flex-direction: column;
      
      transform: translate(-50%, -50%);
      width: 60%;
      
      background-color: ${COLORS.PRIMARY + "d0"};
      
      

      p {
        color: white;
        font-size: 1.3rem;
        text-align: center;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1rem;
        }
      }

      .header-title {
        font-family: ${FONT_FAMILIES.TITLE};
        font-size: 3rem;
        font-weight: 600;
        color: white;
        text-transform: uppercase;
        margin: auto;
        border-bottom: solid 5px white;
        margin-bottom: 1rem;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1.5rem;
        }
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 3rem 0 3rem;
    background-color: ${({ descriptionColor = COLORS.BLACK }) =>
      `${descriptionColor}`};

    h2 {
      font-family: ${FONT_FAMILIES.TITLE};
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 3rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        font-size: 1.5rem;
      }
    }

    p {
      width: 70%;
      font-size: 1.3rem;
      color: ${COLORS.BLACK};
      text-align: center;
      line-height: 2rem;
      margin: auto;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 90%;
        font-size: 1rem;
      }
    }
  }
  .locatie-info {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-top: 2rem;
    

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }

    div {
      width: 33.33%;
      padding: 1em;
      color: ${COLORS.TERTIARY};

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 100%;
      }

      p {
        margin-top: 1rem;
        color: BLACK;

        a {
          color: ${COLORS.SECONDARY};
        }
      }
    }
  }
  .locatie-detail {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-top: 2rem;
    

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }
    img {
      margin : 3rem;
    }
    div {
      width: 33.33%;
      padding: 1em;
      color: ${COLORS.TERTIARY};

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 100%;
      }

      p {
        margin-top: 1rem;
        color: BLACK;

        a {
          color: ${COLORS.SECONDARY};
        }
      }
    }
  }
  .locaties {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${({ artistsColor = COLORS.PRIMARY }) =>
      `${artistsColor}`};

    h2 {
      font-family: ${FONT_FAMILIES.TITLE};
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      margin-bottom: 3rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }

    .locatie-items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 5%;
    }
  }
`

export const Locatie = styled(Link)`
  display: flex;
  position: relative;
  width: 22vw;
  height: 22vw;
  margin: 2vw;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
    width: 90vw;
    height: 90vw;
    margin: 2vw 0;
  }

  &:hover {
    transform: scale(1.05);

    .locatie-info {
      height: 100%;
      background-color: ${COLORS.TERTIARY + "c0"};

      p {
        color: ${COLORS.BLACK};
      }
    }
  }

  .locatie-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    height: 130px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${COLORS.BLACK + "c0"};
    transition: all 0.3s ease-in-out;

    p {
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: 600;
      color: white;
      margin: 0;
    }

    p:nth-child(2) {
      color: ${COLORS.SECONDARY};

      margin-top: 0.3rem;
    }
  }
`
export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`