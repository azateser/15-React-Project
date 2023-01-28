import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";

import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Blogs = () => {
  const searchInput = useSelector(selectUserInput);
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=1c49f89b9262290500b01b268cdca1b4&lang=en`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);

  return (
    <div className="blogs-area">
      <h1 className="title">
        Blogs: <span>{searchInput}</span> <hr />
      </h1>
      {loading ? <h1 className="loading">Loading Data...</h1> : ""}
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          <a className="blog" rel="noreferrer" href={blog.url}>
            <div className="image">
              {" "}
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="content">
              <h3 className="info">
                <span className="category">
                  {blog.source.name.slice(0, 20)}
                </span>
                <p className="date">
                  <AiOutlineClockCircle /> {blog.publishedAt}
                </p>
              </h3>
              <h1 className="title">{blog.title}</h1>
              <p className="description">{`${blog.description.slice(
                0,
                105
              )}...`}</p>

              <button className="read-more">
                Read More
                <BsArrowRight className="icon" />
              </button>
            </div>
          </a>
        ))}

        {blogs?.totalArticles === 0 && (
          <h1 className="no__blogs">
            No blogs available 😞. Search something else to read blogs on the
            greatest platform.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;
