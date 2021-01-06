import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

//import { DefaultLayout, BackButton, SliceZone } from './components';
import SliceZone from './slices/SliceZone';
import BackButton from './slices/BackButton';
//import NotFound from './NotFound';
import { client } from './prismicHelpers';
import './blog.css';

/**
 * Blog post page component
 */
const Post = ({ match }) => {
  const [prismicDoc, setPrismicDoc] = useState(null);
  const [notFound, toggleNotFound] = useState(false);

  const params = useParams();
  const uid = params.uid;

  // Get the blog post document from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const doc = await client.getByUID('blog', uid);
  
        if (doc) {
          setPrismicDoc(doc);
        } else {
          console.warn('Blog post document was not found. Make sure it exists in your Prismic repository');
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    }

    fetchPrismicData();
  }, [uid]);

  // Return the page if a document was retrieved from Prismic
  if (prismicDoc) {
    const title =
      prismicDoc.data.title.length !== 0 ?
      RichText.asText(prismicDoc.data.title) :
      'Untitled';

    return (
      <div className="App-container">
        <div style={{display:'flex', flexFlow:'column', textAlign:'start',
        maxWidth:600}}>
          {prismicDoc.data.preview_image?(
            <div style={{width:'100%'}}>
              <img style={{width:'100%'}} src={prismicDoc.data.preview_image.url}/>
            </div>
          ):null}
          <div className="outer-container">
            <BackButton />
            <h1>{title}</h1>
          </div>
          <SliceZone sliceZone={prismicDoc.data.body} />
        </div>
      </div>
    );
  }

  return null;
}

//<DefaultLayout wrapperClass="main" seoTitle={title}></DefaultLayout>
export default Post;