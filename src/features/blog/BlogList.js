import {useEffect, useState} from 'react';
import Prismic from '@prismicio/client'
import PostItem from './BlogPreview';
import {client, apiEndpoint, accessToken} from './prismicHelpers';
import './blog.css';

function BlogList(){
  const [blogPosts, setDocData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at('document.type', 'blog')
      )
      console.log(response);
      if (response) {
        setDocData(response.results)
      }
    }
    fetchData()
  }, [])

  console.log(blogPosts);

  if(blogPosts){
    return(
      <div className="App-container">
        <div style={{display:'flex', flexFlow:'row wrap', justifyContent:'center'}}>
          {blogPosts.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      </div>
    )
  }else{
    return null;
  }
  
}

export default BlogList;
