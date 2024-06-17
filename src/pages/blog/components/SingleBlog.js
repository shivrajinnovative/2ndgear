import React, { useEffect, useState } from 'react'

import blog from '../blog.png'
import instagram from '../icons/instagram.svg'
import facebook from '../icons/facebook.svg'
import linkedin from '../icons/linkedin.svg'
import x from '../icons/x.svg'
import { useDynamicQuery } from '../../../utils/apiUtils'

export default function SingleBlog({slug}) {
    const [blog,setBlog]=useState(null)
    const postUrl = window.location.href;
    const postTitle = blog?blog[0].blog_title:"";
  
    const shareOnFacebook = () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`, 'Share on Facebook', 'width=600,height=400');
    };
  
    const shareOnTwitter = () => {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`, 'Share on Twitter', 'width=600,height=400');
    };
  
    const shareOnLinkedIn = () => {
      window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`, 'Share on LinkedIn', 'width=600,height=400');
    };
  const { data, error, isLoading } = useDynamicQuery(
    ["blogsingle"],
    `get-blog-details/${slug}`
  );
  
  useEffect(()=>{
    if(data){
        setBlog(data.blogsDetails)
    }
  },[data])

  if(error || isLoading){
    return <></>
  }
    return (
        <div>
          <h2 className="py-3">{blog && blog[0].blog_title}</h2>
          <button className="btn bg-primary rounded-5 text-white">
            <i className="bi bi-calendar4 mx-2"></i>
            {blog && blog[0].blog_date}
          </button>
          <span className="mx-4 text-primary fw-600">Posted By <span style={{"color":"#A7A001"}}>Admin</span></span>
          <img src={blog && blog[0].blog_image} alt={blog && blog[0].blog_image} className="d-block my-4 w-100" />
         
          <div dangerouslySetInnerHTML={{ __html: blog && blog[0].blog_description }} />
         
          <div className="bg-secondary text-primary d-flex justify-content-between px-2 align-items-center">
            <p className="m-0 fw-500">Share this Post</p>
            <div className="blogShareIcons">
              <a href="" onClick={shareOnFacebook}>
                <img src={facebook} alt={facebook} />
              </a>
              <a href="" onClick={shareOnTwitter}>
                <img src={x} alt={x} />
              </a>
              <a href="" onClick={shareOnLinkedIn}>
                <img src={linkedin} alt={linkedin} />
              </a>
              <a href="">
                <img src={instagram} alt={instagram} />
              </a>
            </div>
          </div>
        </div>
      );
  
}
