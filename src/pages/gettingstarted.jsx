import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import 'aos/dist/aos.css'
export default function Gettingstarted() {
    useEffect(() => {
        Aos.init()
      }, [])
      // Counter
      const [CounterOn, SetCounterOn] = useState(false)
      const [selected, setselected] = useState(null)
      const toggleAccordion = i => {
        if (selected == i) {
          return setselected(null)
        }
        setselected(i)
      }
      const accordianData = [
        {
          title: 'Excellent Income Potential?',
          content:
            'Entry-level drivers can expect competitive salaries, with the potential to earn significantly more as experience grows. Some drivers can reach annual incomes exceeding $100,000!'
        },
        {
          title: 'High Demand?',
          content:
            ' The trucking industry is experiencing a significant driver shortage, creating ample job opportunities for qualified individuals.'
        },
        {
          title: 'Career Advancement Opportunities?',
          content:
            'Many drivers progress into management positions within trucking companies, allowing for career growth and leadership opportunities.'
        },
        {
          title: 'Job Security?',
          content:
            'The trucking industry is vital to the Canadian economy, with a constant need to transport goods across the country. This translates to stable employment opportunities.'
        },
        {
          title: 'Diverse Trucking Sectors?',
          content:
            'Explore various trucking sectors that suit your preferences, from long-haul routes across North America to local delivery schedules within your community.'
        }
      ]
    return (
        <>
        
      <section className='experience-one'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='experience-one__left'>
                <div
                  className='sec-title  text-start wow fadeInUp'
                  data-wow-duration='300ms'
                >
                  <h6 className='sec-title__tagline'>
                    <i className='icon-left-arrow sec-title__img'></i>
                    Why?
                    <i className='icon-right-arrow sec-title__img'></i>
                  </h6>

                  <h3 className='sec-title__title'>
                    Why Become a Truck Driver?
                  </h3>
                  <p>
                    The trucking industry offers a multitude of advantages for
                    those seeking a stable and rewarding career. Here are just a
                    few reasons to consider becoming a commercial truck driver
                  </p>
                </div>
                <div className='experience-one__left__content  count-box'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div
                        className='experience-one__left__content__item  wow fadeInUp'
                        data-wow-delay='500ms'
                        style={{
                          backgroundImage:
                            'url(assets/images/resources/exprince-1-1.jpg)'
                        }}
                      >
                        <div className='funfact-one__content'>
                          <h3 className='funfact-one__count'>
                            <ScrollTrigger
                              onEnter={() => SetCounterOn(true)}
                              onExit={() => SetCounterOn(false)}
                            >
                              <span className='count-text'>
                                {CounterOn && (
                                  <CountUp
                                    start={0}
                                    end={40}
                                    duration={2}
                                    delay={0}
                                  />
                                )}
                              </span>
                            </ScrollTrigger>
                            <span className='funfact-one__count__pluse'>+</span>
                          </h3>
                          <span className='funfact-one__content__text'>
                            Year <br />
                            Expertise
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div
                        className='experience-one__left__content__item  wow fadeInUp'
                        data-wow-delay='700ms'
                        style={{
                          backgroundImage:
                            'url(assets/images/resources/exprince-1-2.png)'
                        }}
                      >
                        <div className='experience-one__left__content__item__icon'>
                          <img
                            src='assets/images/loader2.png'
                            alt='experience-one__left__content__item__icon'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='faq-page__accordion drivschol-accrodion  wow fadeInUp'
                data-wow-delay='500ms'
                data-grp-name='drivschol-accrodion'
              >
                {accordianData.map((item, index) => (
                  <div
                    className={`accrodion ${
                      selected === index ? 'active' : ''
                    }  p-3`}
                  >
                    <div className='accrodion-title'>
                      <h4 className='accrodion-title__text'>
                        {item.title}
                        <span
                          className='accrodion-title__icon'
                          onClick={() => toggleAccordion(index)}
                        ></span>
                      </h4>
                    </div>
                    <div
                      className={`accordion-content ${
                        selected === index ? '' : 'd-none'
                      }`}
                    >
                      <div className='inner'>
                        <p className='accrodion-content__text'>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
        
        </>
    )
}
