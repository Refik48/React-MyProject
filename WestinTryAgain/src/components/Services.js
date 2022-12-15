import React from 'react'
import SectionTitle from './Component/SectionTitle'
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
                    <!-- Item 01 -->
                    <div class="col-md-6 col-lg-4">
                        <div class="services-box">
                            <img src="assets/img/art-design.svg" alt="/">
                            <div class="services-content">
                                <h5 class="services-head">Graphic Design</h5>
                                <p class="services-description mb-0">specialise in Graphic design Whether you need to create a new website or updat.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Item 02 -->
                    <div class="col-md-6 col-lg-4">
                        <div class="services-box">
                            <img src="assets/img/web-design.svg" alt="/">
                            <div class="services-content">
                                <h5 class="services-head">Web Design</h5>
                                <p class="services-description mb-0">design, build & maintain websites that keep pace with our digital world.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Item 03 -->
                    <div class="col-md-6 col-lg-4">
                        <div class="services-box">
                            <img src="assets/img/portfolio.svg" alt="/">
                            <div class="services-content">
                                <h5 class="services-head">App Development</h5>
                                <p class="services-description mb-0">build mobile first solutions for ios, Android taking your idea to polished product.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Item 04 -->
                    <div class="col-md-6 col-lg-4">
                        <div class="services-box">
                            <img src="assets/img/musical-notes.svg" alt="/">
                            <div class="services-content">
                                <h5 class="services-head">Musice Writing</h5>
                                <p class="services-description mb-0">Music copying, writing, creat, transcription, arranging composition services.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Item 05 -->
                    <div class="col-md-6 col-lg-4">
                        <div class="services-box">
                            <img src="assets/img/website.svg" alt="/">
                            <div class="services-content">
                                <h5 class="services-head">Digital Marketing</h5>
                                <p class="services-description mb-0">Generate your sales opportunity with our best digital marketing services.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Item 06 -->
                    <div class="col-md-6 col-lg-4">
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