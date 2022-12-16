import React from 'react'
import SectionTitle from './Component/SectionTitle'
import Service from './Component/Service'
const Services = () => {
  return (
    <section id="services" class="services-02 py-6 bg-grey">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
             <SectionTitle aciklama="best feature" baslik="Services"/>

                       
                    </div>
                </div>
                <div class="row mt-3">
                    
                    <div class="col-md-6 col-lg-4">
                    <Service resim="assets/img/art-design.svg" baslik="Graphic Design" aciklama="specialise in Graphic design Whether you need to create a new website or updat."/>
                        
                    </div>
                   
                    <div class="col-md-6 col-lg-4">
                    <Service resim="assets/img/web-design.svg" baslik="Web Design" aciklama="design, build & maintain websites that keep pace with our digital world."/>
                        
                    </div>
                    {/* <!-- Item 03 --> */}
                    <div class="col-md-6 col-lg-4">
                    <Service resim="" baslik="" aciklama=""/>
                        <div class="services-box">
                            <img src="assets/img/portfolio.svg" alt="/">
                            <div class="services-content">
                                <h5 class="services-head">App Development</h5>
                                <p class="services-description mb-0">build mobile first solutions for ios, Android taking your idea to polished product.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Item 04 --> */}
                    <div class="col-md-6 col-lg-4">
                    <Service resim="" baslik="" aciklama=""/>
                        <div class="services-box">
                            <img src="assets/img/musical-notes.svg" alt="/">
                            <div class="services-content">
                                <h5 class="services-head">Musice Writing</h5>
                                <p class="services-description mb-0">Music copying, writing, creat, transcription, arranging composition services.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Item 05 --> */}
                    <div class="col-md-6 col-lg-4">
                    <Service resim="" baslik="" aciklama=""/>
                        <div class="services-box">
                            <img src="assets/img/website.svg" alt="/">
                            <div class="services-content">
                                <h5 class="services-head">Digital Marketing</h5>
                                <p class="services-description mb-0">Generate your sales opportunity with our best digital marketing services.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Item 06 --> */}
                    <div class="col-md-6 col-lg-4">
                    <Service resim="" baslik="" aciklama=""/>
                        <div class="services-box">
                            <img src="assets/img/brand-awareness.svg" alt="/">
                            <div class="services-content">
                                <h5 class="services-head">Brand Identity</h5>
                                <p class="services-description mb-0">I can manufacture magic that allows your brand to stand out from the crowd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Services