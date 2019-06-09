import React from "react";
import Layout from "./Layout";
import { ArticleGrid } from "./ArticleGrid";
import { LandingPage } from "./LandingPage";

export class App extends React.Component {
    render() {
        return (
            <>
                {this.props.visited || <LandingPage />}
                <Layout />
                <ArticleGrid />
            </>
        );
    }
}
