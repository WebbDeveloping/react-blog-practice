import React from "react";
import Card from "./Card";
import Loading from "./Loading";

export default function BlogList(props) {
  const [data, setData] = React.useState(props.news)
  const [load, setLoad] = React.useState(props.load)
  
// console.log(props)
  // let info = []

    let info = data.slice(0, 6).map((blog, i) => {
      // console.log(blog)
      return (
        <div key={blog.id} className="col p-3">
      <Card

        {...blog}
      />
    </div>
      )
    })

  return load ? <Loading /> : (
    <>
      <div className="album py-5 bg-dark">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-5">
            { info}
          </div>
        </div>
      </div>
    </>
  );
}
