import React from "react";
import { MyServices } from "../data/data";
import Layout from "./Layout";

const Services = () => {
  return (
    <Layout>
      <section id="services" className="services section-show">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>My Services</p>
          </div>

          <div className="row">
            {MyServices.map((service) => {
              return (
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="icon-box" style={{width:"100%"}}>
                    <div className="icon">
                      <i className="icofont-dashboard-web"></i>
                    </div>
                    <h4>
                      <a href="#">{service.Name}</a>
                    </h4>
                    <p>
                      {service.Projects.map((project) => {
                        return project + " | ";
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
