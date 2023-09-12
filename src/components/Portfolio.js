import React, { useState } from "react";
import Images from "./Images";
import Layout from "./Layout";
import Image1 from "../images/price.PNG";
import Image2 from "../images/dating.PNG";
import Image3 from "../images/NFT.png";
import Image4 from "../images/susumi.PNG";
const AllData = [[Image1,"Price Comparison Website","https://ae.pricena.com/en/"], [Image2,"Dating Website","https://gopromenad.com/"], 
  [Image3,"Nft marketplace","https://market.kryptomon.co/"], [Image4,"SUSUMI NFT","https://susumi.io/"]];
const Web = [[Image1,"Price Comparison Website","https://ae.pricena.com/en/"], [Image2,"Dating Website","https://gopromenad.com/"]];

const Blockchain = [[Image3,"Nft marketplace","https://market.kryptomon.co/"], [Image4,"SUSUMI NFT","https://susumi.io/"]];

const myWorks = [
  {
    id: 1,
    Name: "All",
  },
  {
    id: 2,
    Name: "Web",
  },
  {
    id: 3,
    Name: "Blockchain",
  },
  ];
const showsContent = {
  1: AllData,
  2: Web,
  3: Blockchain,
};
const Portfolio = () => {
  const [FilteredImages, setFilteredImages] = useState(AllData);
  const [ActiveFilter, setActiveFilter] = useState(1);
  const handleClick = (content) => {
    setFilteredImages(showsContent[content.id]);
  };
  return (
    <Layout>
      <section id="portfolio" className="portfolio section-show">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                {myWorks.map((content) => {
                  return (
                    <li
                      className={
                        content.id === ActiveFilter ? "filter-active" : ""
                      }
                      onClick={() => {
                        setActiveFilter(content.id);
                        handleClick(content);
                      }}
                    >
                      {content.Name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row">
            <Images images={FilteredImages} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
