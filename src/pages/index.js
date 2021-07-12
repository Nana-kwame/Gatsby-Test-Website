import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from './../components/header';
import Card from "../components/Card"
import Section from "../components/section"
import Wave from "../components/wave"

import staticdata from './../../static-data.json';
import Cell from "../components/Cell"


import styled from 'styled-components';
import Footer from "../components/Footer"

const SectionCaption = styled.p`
font-weight: 600px;
font-size: 18px;
text-transform: uppercase;
color:#94a4ba;
text-align: center;
`;

const SectionCellGroup = styled.div`
  max-width:800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px
  }
`; 

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Header /> */}
    <div className="Hero">
      {/* Group is a collection of layers similar to Figma or Invision */}
      <div className="HeroGroup">
        <h1>Learn to <br /> design and code react apps</h1>
        <p>Hopefully I'll learn something really cool with these courses.</p>
        <p>Now go build something great.</p>

        <Link to="/page-2/">Watch Video</Link>
        <div className="Logos">
          <img src={require('./../images/logo-sketch.png')} width='50' />
          <img src={require('./../images/logo-figma.png')} width='50' />
          <img src={require('./../images/logo-framer.png')} width='50' />
          <img src={require('./../images/logo-react.png')} width='50' />
          <img src={require('./../images/logo-swift.png')} width='50' />
          <img src={require('./../images/logo-studio.png')} width='50' />
        </div>

        <Wave />

      </div>
    </div>
    <div className="Cards">
      <h2> 11 courses, more coming</h2>
      <div className="CardGroup">
        <Card title="React for Designers" text="12 Sections" image={require('./../images/wallpaper.jpg')} />
        <Card title="React Native for Designers" text="15 Sections" image={require('./../images/wallpaper2.jpg')} />
        <Card title="Sound Design" text="12 Sections" image={require('./../images/wallpaper3.jpg')} />
        <Card title="React for Designers" text="12 Sections" image={require('./../images/wallpaper.jpg')} />
        <Card title="React for Designers" text="12 Sections" image={require('./../images/wallpaper.jpg')} />
        <Card title="React for Designers" text="12 Sections" image={require('./../images/wallpaper.jpg')} />
        <Card title="React for Designers" text="12 Sections" image={require('./../images/wallpaper.jpg')} />
        <Card title="React for Designers" text="12 Sections" image={require('./../images/wallpaper.jpg')} />
      </div>
    </div>

    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title='React for Designers'
      text="Learn how to build modern websites using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions and dynamic data with Contentful and deploying your site to Netlify"
    />
    <SectionCaption> 12 Sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(({ title, image }) => (
        <Cell
          title={title}
          image={image}
        />
      ))}
    </SectionCellGroup>
  </Layout>


)

export default IndexPage


