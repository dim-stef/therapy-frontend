import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Button} from 'antd';
import { RichText } from 'prismic-reactjs';
import PostDate from './PostDate';
import FirstParagraph from './FirstParagraph';
import { linkResolver } from './prismic-configuration';

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  const history = useHistory();
  const title =
    RichText.asText(post.data.title) ?
    RichText.asText(post.data.title) :
    'Untitled';
  
  function handleReadMoreClick(){
    history.push(linkResolver(post));
  }

  return (
    <div className="blog-post">
      {post.data.preview_image?(
        <div style={{width:'100%'}}>
          <img style={{width:'100%'}} src={post.data.preview_image.url}/>
        </div>
      ):null}
      
      <Link to={linkResolver(post)}>
        <h2>{title}</h2>
      </Link>


      <PostDate date={post.last_publication_date} />
      
      <FirstParagraph
        sliceZone={post.data.body}
        textLimit={300}
      />
      <Button type="primary" onClick={handleReadMoreClick}>Read more</Button>
    </div>
  );
};

export default PostItem;
