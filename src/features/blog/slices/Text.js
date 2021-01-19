import React from 'react';
import { RichText } from 'prismic-reactjs';
//import { linkResolver } from '../../../prismic-configuration';
import { linkResolver } from '../../prismic/prismic-configuration';
import { customLink } from '../../prismic/prismicHelpers';

/**
 * Text slice component
 */
const Text = ({ slice }) => (
  <div className="post-part single container">
    <RichText
      render={slice.primary.text}
      linkResolver={linkResolver}
      serializeHyperlink={customLink}
    />
  </div>
);

export default Text;