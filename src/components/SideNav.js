import React, { useState } from "react";
import FeaturedPosts from "./FeaturedPosts";


export default function SideNav(props) {

  const [num, setNum] = React.useState(6)

  const handleCatClick = (e) => {

    props.setcats(e);
    props.setnewsload(true)
    damnThing(e)
  }
  const damnThing = (e) => {
    props.setCurrentCategory(e)
  }

  const loadMoreCats = () => {
    num === 6 ?
    setNum(props.cats.length)
    : setNum(6) 
  }

  let categories = props.cats.slice(0, num).map((cat, i) => {
    // let categories = props.cats.map((cat) => { 
    // console.log('cat', cat)
    return (
      <div onClick={() => handleCatClick(cat)} style={{ cursor: "pointer" }} key={cat.id} className="list-item d-flex hover-shadow">
        <div className="category-link d-flex justify-content-between w-100 side-nav-link p-4">
          <p className="h5">{cat}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
          </svg>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white py-5 ">
      <div className="list ">{categories}</div>
      <hr />
      <div onClick={() => loadMoreCats()} style={{ cursor: "pointer" }} className="list-item d-flex hover-shadow">
        <div className="category-link d-flex justify-content-between w-100 side-nav-link p-4">
          <p className="h5">Load More Categories</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
          </svg>
        </div>
      </div>
      <FeaturedPosts />
    </div>
  );
}
