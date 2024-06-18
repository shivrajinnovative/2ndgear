import React, { useEffect, useState } from "react";
import { useDynamicQuery } from "../../../utils/apiUtils";

export default function RecentBlog() {
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
    <>
      {blogs?.map((item, index) => {
        return (
          <div className="row my-2 mb-3" key={index}>
            <div className="col-md-4">
              <img
                src={item.blog_image}
                alt={item.blog_image}
                height="100px"
                width="150px"
              />
            </div>
            <div className="col-md-8">
              <h5 title={item.blog_title}>
                {item.blog_title.substr(0, 40)}...
              </h5>
              <div className="py-3 fw-500 text-primary d-flex justify-content-between">
                <div>
                  <i className="bi bi-calendar4 mx-1"></i>
                  <span className="text-primary">{item.blog_date}</span>
                </div>
                <div>
                  <span className="">
                    Posted By <span className="text-warning">Admin</span>
                  </span>
                  <i className="bi bi-share mx-1"></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
