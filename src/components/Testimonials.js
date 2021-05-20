import React, { Component } from 'react';
import Particles from 'react-particles-js';


import { Particle2 } from './ParticleComponent'
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <Particle2 />
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.testimonials && resumeData.testimonials.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <p>
                            {item.description}
                            </p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}