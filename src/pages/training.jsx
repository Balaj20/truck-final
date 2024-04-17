import Aos from 'aos'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
export default function Training() {
    useEffect(()=>{
        Aos.init()
    })
    return (
      <>
      
      <section class="course-two course-two--page">
            <div class="container">
                <div class="row gutter-y-30">
                    <div class="col-md-6 col-lg-4">
                        <div class="course-card wow fadeInUp" data-aos='fade-up' data-wow-duration='1500ms' data-wow-delay='00ms'>
                            <a href="course-details.html" class="course-card__image">
                                <img src="assets/images/gallery/course-1-1.jpg" alt="@@name" />
                            </a>
                            <div class="course-card__content">
                                <div class="course-card__thumbnail">
                                  
                                    <h3 class="course-card__title"><a href="course-details.html">TRACTOR TRAILER MELT</a></h3>
                                    <p class="course-card__designation">This program is approved as a vocational program under the Private Career Colleges Act, 2005</p>

                                </div>

                                <div class="course-card__bottom">
                                    <div class="course-card__author">
                                        <div class="course-card__author-image">
                                            <img src="assets/images/gallery/author-c-1-2.jpg" alt="course-card__author-image"/>
                                        </div>
                                        <div class="course-card__author-content">
                                            <h5 class="course-card__author-name"><a href="/license" onClick="{ () => {window.location.href = '/license'}}"> Learn more about this License</a></h5>
                                            
                                        </div>
                                    </div>
                                    <a href="course-details.html" class="course-card__bottom-btns"><i class="icon-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="course-card wow fadeInUp" data-aos='fade-up' data-wow-duration='1500ms' data-wow-delay='00ms'>
                            <a href="course-details.html" class="course-card__image">
                                <img src="assets/images/gallery/course-1-1.jpg" alt="@@name" />
                            </a>
                            <div class="course-card__content">
                                <div class="course-card__thumbnail">
                                  
                                    <h3 class="course-card__title"><a href="course-details.html">AZ PROGRAM</a></h3>
                                    <p class="course-card__designation">This program is approved as a vocational program under the Private Career Colleges Act, 2005</p>

                                </div>

                                <div class="course-card__bottom">
                                    <div class="course-card__author">
                                        <div class="course-card__author-image">
                                            <img src="assets/images/gallery/author-c-1-2.jpg" alt="course-card__author-image"/>
                                        </div>
                                        <div class="course-card__author-content">
                                            <h5 class="course-card__author-name"><a href="/license" onClick="{ () => {window.location.href = '/license'}}"> Learn more about this License</a></h5>
                                            
                                        </div>
                                    </div>
                                    <a href="course-details.html" class="course-card__bottom-btns"><i class="icon-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-md-6 col-lg-4">
                        <div class="course-card wow fadeInUp" data-aos='fade-up' data-wow-duration='1500ms' data-wow-delay='00ms'>
                            <a href="course-details.html" class="course-card__image">
                                <img src="assets/images/gallery/course-1-1.jpg" alt="@@name" />
                            </a>
                            <div class="course-card__content">
                                <div class="course-card__thumbnail">
                                  
                                    <h3 class="course-card__title"><a href="course-details.html">DZ CLASS</a></h3>
                                    <p class="course-card__designation">This program does not require approval as a vocational program under the Private Career Colleges Act, 2005</p>

                                </div>

                                <div class="course-card__bottom">
                                    <div class="course-card__author">
                                        <div class="course-card__author-image">
                                            <img src="assets/images/gallery/author-c-1-2.jpg" alt="course-card__author-image"/>
                                        </div>
                                        <div class="course-card__author-content">
                                            <h5 class="course-card__author-name"><a href="/license" onClick="{ () => {window.location.href = '/license'}}"> Learn more about this License</a></h5>
                                            
                                        </div>
                                    </div>
                                    <a href="course-details.html" class="course-card__bottom-btns"><i class="icon-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                    <div class="col-md-6 col-lg-4">
                        <div class="course-card wow fadeInUp" data-aos='fade-up' data-wow-duration='1500ms' data-wow-delay='00ms'>
                            <a href="course-details.html" class="course-card__image">
                                <img src="assets/images/gallery/course-1-1.jpg" alt="@@name" />
                            </a>
                            <div class="course-card__content">
                                <div class="course-card__thumbnail">
                                  
                                    <h3 class="course-card__title"><a href="course-details.html">AIR BRAKE Z COURSE</a></h3>
                                    <p class="course-card__designation">Approved Air Brake Endorsement & Adjustment Facility, P.D.I.C. & S.B.D.I.C. Defensive Driving Centre</p>
                                </div>

                                <div class="course-card__bottom">
                                    <div class="course-card__author">
                                        <div class="course-card__author-image">
                                            <img src="assets/images/gallery/author-c-1-2.jpg" alt="course-card__author-image"/> 
                                        </div>
                                        <div class="course-card__author-content">
                                            <h5 class="course-card__author-name"><a href="/license" onClick="{ () => {window.location.href = '/license'}}"> Learn more about this License</a></h5>
                                            
                                        </div>
                                    </div>
                                    <a href="course-details.html" class="course-card__bottom-btns"><i class="icon-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      
      
      </>
    )
}
