/*
 * Top level app & layout, loaded ONCE at the start
 */

import App, {Container} from 'next/app'
import React from 'react'
import Head from 'next/head'
import "../styles/style.scss"
import Header from "../components/header";


export default class MyApp extends App {

    componentDidMount() {

    }

    render() {
        const {Component, pageProps} = this.props;

        return <Container>
            <Head>
                <title>OMDb Movie Search</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" href="/static/favicon.ico"/>
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
                      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                      crossOrigin="anonymous"/>
            </Head>

            <div className="outer">
                <article>
                    <Header/>
                    <Component {...pageProps} />
                </article>
            </div>
        </Container>
    }
}

