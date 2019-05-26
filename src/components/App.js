import React from "react";
import { Layout } from "./Layout";
import { ArticleGrid } from "./ArticleGrid";

export class App extends React.Component {
    render() {
        return (
            <>
                <Layout />
                <ArticleGrid />
            </>
        );
    }
}
