import React, { Component } from 'react';
import {Link} from 'gatsby';
import Title from "../Globals/Title";

export default function Info() {

    return (
        
      <section className = "py-5">
      
          <div className = "container">
              <Title title = "Our Story"/>
              <div className = "row">
               
                  <div className = "cl-10 col-sm-8 mx-auto text-center">
                      <p className = "lead text-muted mb-5">
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum eum rerum laudantium praesentium. Repudiandae possimus praesentium voluptate impedit tenetur veritatis soluta maxime repellat saepe quaerat natus facilis labore perferendis ullam deleniti molestiae provident, nihil corrupti pariatur. Magni doloribus quos nobis? 
                      </p>
                      <Link to = "about">
                        <button className="btn text-uppercase btn-yellow">
                            about page
                        </button>
                      </Link>
                  </div>
              </div>
          </div>
        
 
        
      </section>
    )
  }

