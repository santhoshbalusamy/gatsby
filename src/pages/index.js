import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const Index = () => {

 const gatsbyRepoData = useStaticQuery(graphql`
    query {
      example {
        apps
      }
    }
    `);

  return (
    <div>
      {gatsbyRepoData.example.apps.map((item, index) => {
        return (
          <div>{ index+1 } - {item}</div>
        )
      })
      }
    </div>
  );
};

Index.propTypes = {
  data: PropTypes.object,
};

export default Index;
