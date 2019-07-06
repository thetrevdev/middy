import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Header from '../components/header'
import Features from '../components/features'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="sans-serif bg-black-10 pb5 pb6-m pb7-l" style={{
        // background: '#5a75fa',
        background: 'linear-gradient(315deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%), linear-gradient(315deg, #5a75fa 0%, #2f95ff 100%)'
      }}>
        <Header className="sans-serif black-10" siteTitle={data.site.siteMetadata.title} />
        <div className="tc mt4 mt5-m mt6-l ph3">
          <div>
            <img width="300" className="mw-100" src="https://raw.githubusercontent.com/middyjs/middy/master/img/middy-logo.png"/>
          </div>
          <h1 className="f3 f2-l fw3 blue-90 mb0 lh-title">The Node.js <strong>middleware</strong> framework for <strong>AWS Lambda</strong></h1>
        </div>
      </div>

      <div className="sans-serif ph3 pv5 bb bt b--black-10">
        <div className="mw9 center">
          <h2 className="lh-title">Wait, a framework for Lambda?</h2>
          <p className="lh-copy">Middy is like <a href="https://expressjs.com/">Express</a> or <a href="https://www.fastify.io/">Fastify</a> but for AWS Lambda.</p>
          <p className="lh-copy">Lambdas are often very simple and you shouldn't need a framework if you are writing your first Lambda.</p>
          <p className="lh-copy">But, when you are writing <em>serverless applications</em> composed by
        multiple Lambda functions, Middy helps to keep your functions simple by giving you the power of the <em>middleware pattern</em> to manage common behaviors like:
          <ul className="lh-copy">
            <li>Input deserialization (e.g. JSON parsing)</li>
            <li>Input/Output validation</li>
            <li>Authentication & Authorization</li>
            <li>Output serialization</li>
            <li>Error management</li>
            <li>Logging</li>
            <li>... and a lot more</li>
          </ul>
          </p>
        </div>
      </div>

      <div className="sans-serif pv5 bb bt b--black-10 bg-washed-blue">
        <div className="mw9 center">
          <h2 className="lh-title">How does it work?</h2>
          <p className="lh-copy">...</p>
        </div>
      </div>

      <div className="sans-serif pv5 bb bt b--black-10">
        <div className="mw9 center">
          <h2 className="f2 ph3 ph0-l lh-title tc-l">Features</h2>
          <Features />
        </div>
      </div>

      <div className="sans-serif pv5 bb bt b--black-10 bg-washed-blue">
        <div className="mw9 center">
          <h2 className="lh-title">Get started</h2>
          <p className="lh-copy">...</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
