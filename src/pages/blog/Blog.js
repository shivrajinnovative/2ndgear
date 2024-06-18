import React, { useEffect } from "react";
import background from "./../services/assets/background.png";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import "./Blog.css";
import { useParams } from "react-router-dom";
import BlogList from "./components/BlogList";
import SingleBlog from "./components/SingleBlog";
import RecentBlog from "./components/RecentBlog";

export default function Blog() {
  const { slug } = useParams();
  useEffect(() => {}, [slug]);

  return (
    <div className="pt-5 bg-white poppins blog">
      <Breadcrumb page="Blog" image={background} />
      <div className="container">
        {!slug && (
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="pt-5 fw-400">Read our Blog</h1>
            <select className="py-2 px-4">
              <option>Sort By</option>
              <option>New</option>
              <option>Old</option>
            </select>
          </div>
        )}
        <div className="row py-3">
          <div className="col-xl-7 bg-white py-2  ">
            {slug ? <SingleBlog slug={slug} /> : <BlogList />}
          </div>
          <div className="col-xl-5 px-md-5 bg-white">
            <h3 className="fw-600 py-3">Recent Post </h3>
            <RecentBlog />
          </div>
        </div>
      </div>
    </div>
  );
}
