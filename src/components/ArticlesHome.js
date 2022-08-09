import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import axios from "axios";
import { Button } from "react-bootstrap";
import Card from "./Card";
import Loading from "./Loading";

export default function ArticlesHome(props) {
  const [num, setNum] = React.useState(6)

  const loadMorePosts = () => {
    num === 6 ?
    setNum(props.news.length)
    : setNum(6) 
  }

  let info;
  if (!props.load) {
    info = props.news.slice(0, num).map((blog) => {
      // console.log('ah', blog)
      return (
        <div key={blog.id} className="col p-5">
          <Card author={blog.author} {...blog} />
        </div>
      );
    });
  } else {
    console.log("else");
  }



  // return props.load && props.news[0].category != props.cats ? (
  return props.newsload ? (
    <div className="col mh-100  h-75 w-100 d-inline-block m-auto p-5">
      <Loading />
    </div>
  ) : (
    <>
      {info}
      <Button
        onClick={() => loadMorePosts()}
        variant="light"
        className="btn-outline-secondary w-75 p-3 mx-auto mb-5"
      >
        {" "}
        {num <= 6 ? 'Load More Posts' : 'Collapse'}
      </Button>
    </>
  );
}
