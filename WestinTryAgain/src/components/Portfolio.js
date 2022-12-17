import React from 'react'
import SectionTitle from './SectionTitle'

const Portfolio = () => {
  return (
     <section id="portfolio" className="portfolio-02 py-6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <SectionTitle baslik="My work<" aciklama="portfolio"/>
                        
                    </div>
                </div>
                <div className="row">
                    {/* <!--   Portfolio Filters   --> */}
                    <ul id="portfolio-filter" className="list-inline col-lg-12 portfolio-filter">
                        <li className="list-inline-item">
                            <a href="#" data-filter="*" className="active">All</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" data-filter=".webdesign">Web Design</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" data-filter=".mobiledesign">Mobile Design</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" data-filter=".seo">Seo</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" data-filter=".graphic">Graphic</a>
                        </li>
                    </ul>
                </div>
                <div className="portfolio-items row">
                    {/* <!-- Item 01 --> */}
                    <div className="col-md-6 col-lg-4 portfolio-item seo">
                        <div className="portfolio-box">
                            <div className="portfolio-img">
                                <img src="assets/img/portfolio-01.png" alt="/">
                            </div>
                            <div className="portfolio-overlay">
                                <div className="portfolio-overlay-content">
                                    <h5 className="portfolio-category">My Work</h5>
                                    <div className="portfolio-icon">
                                        <a href="portfolio-single-colorful.html.htm">
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a href="assets/img/portfolio-01.png" className="js-zoom-gallery">
                                            <i className="fas fa-search-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Item 02 -->
                    <div className="col-md-6 col-lg-4 portfolio-item graphic webdesign">
                        <div className="portfolio-box">
                            <div className="portfolio-img">
                                <img src="assets/img/portfolio-02.png" alt="/">
                            </div>
                            <div className="portfolio-overlay">
                                <div className="portfolio-overlay-content">
                                    <h5 className="portfolio-category">My Work</h5>
                                    <div className="portfolio-icon">
                                        <a href="portfolio-single-colorful.html.htm">
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a href="assets/img/portfolio-02.png" className="js-zoom-gallery">
                                            <i className="fas fa-search-plus    "></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Item 03 -->
                    <div className="col-md-6 col-lg-4 portfolio-item webdesign graphic">
                        <div className="portfolio-box">
                            <div className="portfolio-img">
                                <img src="assets/img/portfolio-03.png" alt="/">
                            </div>
                            <div className="portfolio-overlay">
                                <div className="portfolio-overlay-content">
                                    <h5 className="portfolio-category">My Work</h5>
                                    <div className="portfolio-icon">
                                        <a href="portfolio-single-colorful.html.htm">
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a href="assets/img/portfolio-03.png" className="js-zoom-gallery">
                                            <i className="fas fa-search-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Item 04 -->
                    <div className="col-md-6 col-lg-4 portfolio-item mobiledesign webdesign">
                        <div className="portfolio-box">
                            <div className="portfolio-img">
                                <img src="assets/img/portfolio-04.png" alt="/">
                            </div>
                            <div className="portfolio-overlay">
                                <div className="portfolio-overlay-content">
                                    <h5 className="portfolio-category">My Work</h5>
                                    <div className="portfolio-icon">
                                        <a href="portfolio-single-colorful.html.htm">
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a href="assets/img/portfolio-04.png" className="js-zoom-gallery">
                                            <i className="fas fa-search-plus    "></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <!-- Item 05 -->
                     <div className="col-md-6 col-lg-4 portfolio-item mobiledesign seo">
                        <div className="portfolio-box">
                            <div className="portfolio-img">
                                <img src="assets/img/portfolio-05.png" alt="/">
                            </div>
                            <div className="portfolio-overlay">
                                <div className="portfolio-overlay-content">
                                    <h5 className="portfolio-category">My Work</h5>
                                    <div className="portfolio-icon">
                                        <a href="portfolio-single-colorful.html.htm">
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a href="assets/img/portfolio-05.png" className="js-zoom-gallery">
                                            <i className="fas fa-search-plus    "></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <!-- Item 06 -->
                     <div className="col-md-6 col-lg-4 portfolio-item mobiledesign">
                        <div className="portfolio-box">
                            <div className="portfolio-img">
                                <img src="assets/img/portfolio-06.png" alt="/">
                            </div>
                            <div className="portfolio-overlay">
                                <div className="portfolio-overlay-content">
                                    <h5 className="portfolio-category">My Work</h5>
                                    <div className="portfolio-icon">
                                        <a href="portfolio-single-colorful.html.htm">
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a href="assets/img/portfolio-06.png" className="js-zoom-gallery">
                                            <i className="fas fa-search-plus    "></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Portfolio