import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Contact() {
    useEffect(() => {
        AOS.init()
      }, [])
    return (
    <>
      <section class="contact-two">
            <div class="contact-two__bg" style={{backgroundImage: 'url(assets/images/team/bg-contact-team.png)'}} ></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-5"></div>
                    <div class="col-xl-6 col-lg-7 wow slideInRight">
                        <form class="form-one team-form-one__form contact-form-validated " action="https://pixydrops.com/drivschol/inc/sendemail.php" novalidate="novalidate">
                            <div class="sec-title   wow " data-aos="fade-up" data-wow-duration='300ms'>

                                <h6 class="sec-title__tagline">
                                    <i class="icon-left-arrow sec-title__img"></i>
                                    Contact with Us
                                    <i class="icon-right-arrow sec-title__img"></i>
                                </h6>

                                <h3 class="sec-title__title">Feel Free to Write us</h3>
                            </div>
                            <div class="form-one__group  wow fadeInUp" data-wow-delay='500ms'>
                                <div class="form-one__control ">
                                    <input type="text" name="name" placeholder="Your name" />
                                </div>
                                <div class="form-one__control">
                                    <input type="email" name="email" placeholder="Email address" />
                                </div>
                                <div class="form-one__control ">
                                    <input type="text" name="phone" placeholder="Phone" />
                                </div>
                                <div class="form-one__control">
                                    <input type="text" name="subject" placeholder="Subject" />
                                </div>
                                <div class="form-one__control form-one__control__full">
                                    <textarea name="message" placeholder="Write a Message"></textarea>
                                </div>
                                <div class="form-one__control form-one__control__full text-start">
                                    <button type="submit" class="drivschol-btn drivschol-btn--base2"><span>Send a message</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="contact-two__left__image  wow fadeInUp" data-wow-delay='500ms'>
                <img src="assets/images/gallery/truck3.jpeg" alt="contact-two__left__image" />
            </div>
            
        </section>
        
        <div class="contact-map wow fadeInUp" data-aos=
        "fade-up" data-wow-delay='300ms'>
            <div class="container-fluid">
                <div class="google-map google-map__contact">
                    <iframe title="template google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" class="map__contact" allowFullScreen></iframe>
                </div>
                
            </div>
        </div>
    
    
    </>
    )
}
