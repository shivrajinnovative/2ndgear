import React, { useEffect, useState } from "react";
import { useDynamicQuery } from "../../../utils/apiUtils";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  const { data, error, isLoading } = useDynamicQuery(
    ["blogs"],
    "get-blogs-list"
  );

  useEffect(() => {
    if (data) {
      setBlogs(data.blogsData);
    }
  }, [data]);

  return (
    <div className="row bloglist">
      {blogs?.map((blogDetails, index) => {
        return (
          <div className="col-lg-6 my-3" key={index}>
            <Link to={`/blog/${blogDetails.blog_slug}`} className="card p-3">
              <img
                src={blogDetails.blog_image}
                alt={blogDetails.blog_image}
                height="300px"
              />
              <div className="py-3 fw-500 text-primary d-flex justify-content-between">
                <div>
                  <i className="bi bi-calendar4 mx-2"></i>
                  <span className="text-primary">{blogDetails.blog_date}</span>
                </div>
                <div>
                  <span className="">
                    Posted By <span className="text-warning">Admin</span>
                  </span>
                  <i className="bi bi-share mx-3"></i>
                </div>
              </div>
              <h5 title={blogDetails.blog_title}>
                {blogDetails.blog_title.substr(0, 50)}...
              </h5>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
