import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import FluidGrid from "react-fluid-grid";
import Layout from "../components/Layout";
import Code from "../images/code.svg";
import Circle from "../components/circles.js";
import {Helmet} from 'react-helmet';

const styleStrategies1 = [
  {
    mediaQuery: "(max-width: 768.9px)",
    style: { numberOfColumns: 1, gutterHeight: 5, gutterWidth: 0 }
  },
  {
    mediaQuery: "(min-width: 769px) and (max-width: 1279.99px)",
    style: { numberOfColumns: 2, gutterHeight: 15, gutterWidth: 15 }
  },
  {
    mediaQuery: "(min-width: 1280px)",
    style: { numberOfColumns: 3, gutterHeight: 30, gutterWidth: 30 }
  }
];

const styleStrategies2 = [

  {
    mediaQuery:  "(max-width: 1279.9px)",
    style: { numberOfColumns: 1, gutterHeight: 0, gutterWidth: 0 }
  },
  {
    mediaQuery: "(min-width: 1280px)",
    style: { numberOfColumns: 2, gutterHeight: 0, gutterWidth: 0 }
  }
];


const transition = "top 300ms ease-in-out, left 300ms ease-in-out";

class Home extends Component {
  render() {
    const data = this.props.data.projects;
    const allposts = this.props.data.posts;


    return (
       
      <Layout>
      <Helmet>
        <title>Portfolio: Joseph Ketterer</title>
      </Helmet>
    
        <Circle />
        <FluidGrid
          className="container-projects-posts"
          styleStrategies={styleStrategies1}
          transition={transition}
        >
          {data.edges.map(({ node }) => (
            <article key={node.slug} className="container-post">
              <Link
                to={`/post/${node.slug}/`}
                style={{textDecoration: "none"}}
              >
              {node.featured_media.localFile.childImageSharp.fluid && 
                <Img
                  className="image-bloglead"
                  fluid={node.featured_media.localFile.childImageSharp.fluid}
                />
              }
              </Link>

             
                <h3 className="slug"> <Link
                to={`/post/${node.slug}/`}
                style={ {textDecoration: "none"} }
              >{node.title}</Link></h3>
              
              <div className="container-codelist">
                <img src={Code} alt="code" className="code" />
                {node.acf.test && (
                  <p className="highlight-categories">{node.acf.test}</p>
                )}
              </div>
              <div
                className="excerpt"
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
              <Link
                to={`/post/${node.slug}/`} class="button arrow">View Project</Link>
            </article>
          ))}
        </FluidGrid>

        <section>
          <h2>Posts</h2>

          <FluidGrid
            className="container-projects-posts"
            styleStrategies={styleStrategies2}
            transition={transition}
          >
            {allposts.edges.map(({ node }) => (
              <article key={node.slug} className="container-singlepost">
                <Link
                  to={`/post/${node.slug}/`}
                  style={{textDecoration: "none"}}
                >
                  <h3>{node.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </article>
            ))}
          </FluidGrid>
        </section>
      </Layout>
    );
  }
}

export default Home;

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    projects: allWordpressPost(
      filter: { acf: { status: { eq: "project" } } }
      limit: 6
    ) {
      edges {
        node {
          title
          excerpt
          slug
          categories {
            id
            slug
            name
            description
          }
          acf {
            test
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 180) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    posts: allWordpressPost(
      filter: { acf: { status: { eq: "post" } } }
      limit: 2
    ) {
      edges {
        node {
          title
          excerpt
          slug
          categories {
            id
            slug
            name
            description
          }
          acf {
            test
          }
        }
      }
    }
  }
`;
