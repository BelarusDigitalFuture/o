import React from 'react';
import { Helmet } from 'react-helmet';

const FlourishGraph = ({ src }) => {
  return (
    <div className="flourish-embed" data-src={src}>
      <Helmet>
        <script src="https://public.flourish.studio/resources/embed.js" />
      </Helmet>
    </div>
  );
};

export default FlourishGraph;
