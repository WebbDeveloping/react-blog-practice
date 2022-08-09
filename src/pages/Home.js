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

const blogTopics = [
    "all",
    "national",
    "business",
    "sports",
    "world",
    "politics",
    "technology",
    "startup",
    "entertainment",
    "miscellaneous",
    "hatke",
    "science",
    "automobile",
  ];

export default function Home() {
    const [loading, setLoading] = React.useState(true);
    const [newsLoading, setNewsLoading] = React.useState(true);
    const [data, setData] = React.useState({});
    const [cats, setCats] = React.useState("");
    const [cats1, setCats1] = React.useState("all");
    const [featured, setFeatured] = React.useState({});
    const [currentCategory, setCurrentCategory] = React.useState("");
  
    // console.log('set cats', cats[0] && cats[0].id || 'all')
    const getData = (e) => {
      setNewsLoading(true);
      let d = axios
        .get(`https://inshorts.deta.dev/news?category=${e ? e : cats1}`)
        .then((res) => {
          res.data.data.forEach((i) => {
            i.category = res.data.category;
          });
          setData(res.data.data);
          setCurrentCategory(res.data.category);
          setNewsLoading(false);
          setLoading(false);
        })
        .catch((err) => console.log("error", err));
    };
  
    const getFeatureData = (e) => {
      let d = axios
        .get(`https://inshorts.deta.dev/news?category=${e ? e : "all"}`)
        .then((res) => {
          res.data.data.forEach((i) => {
            i.category = res.data.category;
          });
          setFeatured(res.data.data);
          // setData(res.data.data);
          setNewsLoading(false);
          getData(res.data.category);
        })
        .catch((err) => console.log("error", err));
    };
  
    let articles = [];
  
    React.useEffect(() => {
      getFeatureData("all");
      // console.log(featured)
    }, []);
  
    const handleCategory = (e) => {
      setCurrentCategory(e);
      // console.log("current category", currentCategory);
      // console.log("new category", e);
      getData(e);
    };
  
    return loading ? (
      <Loading />
    ) : (
      <div className="App">
        <div className="container-fluid">
          <NavDropdownExample />
          <section>
            <MainContent />
          </section>
          <div className=" bg-light">
            <div className="row">
              <div className="col-sm-3">
                <SideNav
                  setcats={setCats}
                  cats={blogTopics}
                  setnewsload={setNewsLoading}
                  setcategory={handleCategory}
                  currentCategory={currentCategory}
                  setCurrentCategory={handleCategory}
                />
              </div>
              <div className="col-sm-9">
                <div className="album h-100 py-5 bg-light">
                  <div className="container-fluid pt-5 h-100">
                    <h2 className="h1 mt-5 mb-5">{`Latest Articles ${currentCategory}`}</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-3 border mh-100">
                      <ArticlesHome
                        cats={cats}
                        // catsone={cats1}
                        load={loading}
                        newsload={newsLoading}
                        news={data}
                        setdata={setData}
                        setcategory={handleCategory}
                        currentCategory={currentCategory}
                        setCurrentCategory={handleCategory}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark p-5">
              <h2 className=" display-2 text-white text-center pt-5 mb-3 mt-5">
                {"Browse All Articles"}
              </h2>
              <BlogList load={newsLoading} news={featured} />
            </div>
            <MainCTA />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
  
  
