import React from "react";
import { counterData } from "../data/data";
import Chart from "./Chart";
import Count from "./Count";
import Layout from "./Layout";

const AboutUs = () => {
  return (
    <Layout>
      <section id="about" className="about section-show">
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/me.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Full Stack &amp; Blockchain Expert</h3>
              <p className="font-italic"></p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Birthday:</strong> 23 August 1990
                    </li>
                    {/* <li>
                        <i className="icofont-rounded-right"></i>
                        <strong>Website:</strong> https://github.com/jeydev310
                      </li> */}
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Telegram:</strong> @softdev7
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>City:</strong> Budapest, Hungary
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Age:</strong> 33
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Degree:</strong> Bachelor
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Email:</strong> JamesSu125@hotmail.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Full time job:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                I am a smart contract,full stack developer with 10 years of experiences.
                <br></br>
                ✅ Frontend:
                React.js, Next.js, Gatsby,
                Vue.js, Vuex, Nuxt.js, Angular,React Native,
                Tailwind-CSS
                <br></br>
                ✅ Backend: Node.js, Express.js, Nest.js, Restful API, Django,Mysql
                <br></br>
                ✅ Blockchain:
                - DeFi, Dapp
                - Smart Contracts(development, integrate with frontend using
                Web3, deploying on Ethereum/Solana Network using
                Hardhat/Truffle/Remix)
                - NFT Marketplace, NFT games, NFT Foundry Website, NFT Art
                Image by rarity, OpenSea, Pinata, Metadata Generate, Staking,
                Reveal Function
                - ERC-20, ERC-721, ERC-1155, Solidity,Rust,Cardano
              </p>
            </div>
          </div>
        </div>

        <div className="counts container">
          <div className="row">
            {/* <div className="col-lg-3 col-md-6"> */}
            {counterData.map((count) => (
              <Count key={count.id} data={count} />
            ))}
            {/* </div> */}
          </div>
        </div>

        <div className="skills container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Chart
                categories={[
                  "React",
                  "Angular",
                  "Vue",
                  "Nodejs",
                  "MongoDB"
                ]}
                skills={[95, 90, 95, 90]}
              />
            </div>
            <div className="col-md-6">
              <Chart
                categories={[
                  "Solidity",
                  "NestJs",
                  "React Native",
                  "Mysql",
                  "Django",
                ]}
                skills={[95, 90, 90, 90]}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
