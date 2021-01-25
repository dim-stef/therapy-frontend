import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Button} from 'antd';
import { RichText } from 'prismic-reactjs';
import PostDate from './PostDate';
import FirstParagraph from './FirstParagraph';
import { linkResolver } from '../prismic/prismic-configuration';

/**
 * Post list item component
 */
const PostItem = ({ post, small=false }) => {
  const history = useHistory();
  const title =
    RichText.asText(post.data.title) ?
    RichText.asText(post.data.title) :
    'Untitled';
  
  function handleReadMoreClick(){
    history.push(linkResolver(post));
  }
  return (
    <div className="blog-post" style={{maxWidth: small? '29%' : null}}>
      {post.data.preview_image?(
        <div style={{width:'100%'}}>
          <img style={{width:'100%'}} src={post.data.preview_image.url}/>
        </div>
      ):null}
      <div style={{display:'flex', flexFlow:'column', padding: 20}}>
        <PostDate date={post.last_publication_date} />

        <Link to={linkResolver(post)}>
          <h2 style={{fontSize:small?'1.1rem':null, fontWeight:'bold'}}>{title}</h2>
        </Link>

        <FirstParagraph
          sliceZone={post.data.body}
          textLimit={small?130:300}
          small={small}
        />
        <Button type="primary" onClick={handleReadMoreClick}>Read more</Button>
      </div>
    </div>
  );
};

export default PostItem;
