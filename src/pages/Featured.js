import React from 'react'
import axios from "axios";
import { Button } from 'react-bootstrap'
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ArticlesHome from '../components/ArticlesHome'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import MainContent from '../components/MainContent'
import MainCTA from '../components/MainCTA'
import NavDropdownExample from '../components/Navbar'
import SideNav from '../components/SideNav'

export default function Featured() {
  return (
    <div className="App">
    <div className="container-fluid">
      <NavDropdownExample />
      <section>
        <MainContent />
      </section>
      <div className=" bg-light">
        <div className="row">
          <div className="col-sm-3">
            {/* <SideNav
              setcats={setCats}
              cats={blogTopics}
              setnewsload={setNewsLoading}
              setcategory={handleCategory}
              currentCategory={currentCategory}
              setCurrentCategory={handleCategory}
            /> */}
          </div>
          <div className="col-sm-9">
            <div className="album h-100 py-5 bg-light">
              <div className="container-fluid pt-5 h-100">
                <h2 className="h1 mt-5 mb-5">{`Latest Articles ${'currentCategory'}`}</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-3 border mh-100">
                  {/* <ArticlesHome
                    cats={cats}
                    // catsone={cats1}
                    load={loading}
                    newsload={newsLoading}
                    news={data}
                    setdata={setData}
                    setcategory={handleCategory}
                    currentCategory={currentCategory}
                    setCurrentCategory={handleCategory}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark p-5">
          <h2 className=" display-2 text-white text-center pt-5 mb-3 mt-5">
            {"Browse All Articles"}
          </h2>
          {/* <BlogList load={newsLoading} news={featured} /> */}
        </div>
        <MainCTA />
        <Footer />
      </div>
    </div>
  </div>
  )
}
