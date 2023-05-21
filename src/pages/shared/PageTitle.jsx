import React from 'react'
import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
    console.log(title)
  return (
    <Helmet>
      <title>ToysMart | {title}</title>
    </Helmet>
  );
}

export default PageTitle