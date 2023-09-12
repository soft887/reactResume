import React from "react";
import Layout from "./Layout";

const Resume = () => {
  return (
    <Layout>
      <section id="resume" className="resume section-show">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Full Stack & Blockchain Lead developer</h4>
                <p>
                  <em>
                    10 years of experience in full stack,blockchain lead
                    developers
                    <br />
                  </em>
                </p>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Computer Engineering</h4>
                <h5>2008 - 2012</h5>
                <p>
                  <em>Budapest University of Technology and Economics</em>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Experience</h3>
              <div className="resume-item">
                <h4>Lead Full Stack Developer</h4>
                <h5>Jan 2022 - Mar 2023</h5>
                <p>Company: Hamlet </p>
                <p>Location: Columbia, Maryland, United States</p>
                <ul>
                  Responsibilities:
                  <br></br>
                  -Led a team of Junior and Mid Developers, overseeing project
                  designations and creating workflows for efficient development.
                  <br></br>
                  -Maintained, developed, upgraded and enhanced the company's
                  websites and internal systems, ensuring a high level of
                  performance and usability.
                  <br></br>
                  -Led the planning, tracking, and documentation of team
                  progress, ensuring timely completion of projects.
                  <br></br>
                  -Created and implemented standardized codes for all company
                  websites and systems, providing guidance for other developers
                  and improving overall consistency.
                  <br></br>
                  -Conceptualized and implemented database structures,
                  architectures, and relationships, optimizing data management
                  and performance.
                  <br></br>
                  -Ensured that all modifications to the company's websites and
                  systems were fully tested prior to deployment, minimizing the
                  risk of errors and bugs.
                  <br></br>
                  -Collaborated with other staff to come up with improvements,
                  enhancements, and bug fixes to the company's websites and
                  ordering systems, driving innovation and customer
                  satisfaction.
                  <br></br>
                  -Demonstrated expertise in managing and deploying scalable
                  cloud infrastructure using AWS services, including EC2, S3,
                  and RDS, resulting in increased system reliability and cost
                  optimization. 
                  <br></br>
                  -Proficient in a wide range of technologies
                  including Reactjs, Typescript, Vuejs,
                  Angular, Node Js, React Native, Nestjs, Django, Mysql,
                  MongoDB,Postgresql,AWS.
                  <br></br>
                </ul>
                <p></p>
              </div>
              <div className="resume-item">
                <h4>Smart contract,Web3 developer</h4>
                <h5>Nov 2016 - Nov 2021</h5>
                <p>Company: WalletHub </p>
                <p>Location: United States</p>
                <ul>
                  Responsibilities:
                  <br></br>
                  -Specialized in developing, integrating and deploying smart
                  contracts on Ethereum/Solana Network using
                  Hardhat/Truffle/Remix.
                  <br></br>
                  -Expertise in building NFT Marketplace, NFT games, NFT Foundry
                  Website, NFT Art Image by rarity, OpenSea, Pinata, Metadata
                  Generate, Staking, Reveal Function
                  <br></br>
                  -Proficient in ERC-20, ERC-721, ERC-1155, Solidity,
                  Rust,Cardano.
                  <br></br>
                </ul>
                <p></p>
              </div>
              <div className="resume-item">
                <h4>Full-stack Developer</h4>
                <h5>Nov 2012 - Oct 2016</h5>
                <p>Company: Webhelp </p>
                <p>Location: France</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
