import Aos from 'aos';
import React, { useEffect } from 'react'
import  'aos/dist/aos.css';
export default function Siminar() {
    useEffect(()=>{
        Aos.init();
    });
    return (
        <>
          <main>
            <section className='container' style={{marginTop: '100px'}} >
                <div className="sec-title    wow" data-aos='fade-up' data-wow-duration='1500ms' data-wow-delay='000ms mt-5'>
                    <div className="text-center align-items-center justify-content-center align-content-center  ">

                        <h3 className="sec-title__title">
                            <i className="icon-left-arrow sec-title__img"></i>
                            Beyond the Basics: Mastering Essential Skills for Trucking Success
                            <i className="icon-right-arrow sec-title__img"></i>
                        </h3>
                        <p style={{ fontSize: "20px", paddingTop: "20px" }}> This page dives deeper into the essential skills
                            and knowledge you'll gain through Truck
                            Training Academy's (TTA) comprehensive suite of seminars designed to complement
                            your core commercial driver training program.

                        </p>
                    </div>


                    <h2 style={{color: "#00B2D2"}} s className="ps-5">Sharpen Your Skills and Elevate Your Career Potential:</h2>
                    <div className="ms-5">
                        <p style={{fontSize: "18px"}}>TTA's seminars go beyond the fundamentals, equipping you with
                            specialized knowledge
                            and practical skills valued by top trucking companies. These focused programs allow
                            you to:
                        </p>
                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{fontSize: "17px"}}> <b style={{ color:"black" , fontWeight:'800' }}> Deepen your
                                    understanding </b>of critical topics related to vehicle systems, regulations,
                                safety procedures, and efficient driving practices </li>
                            <li style={{fontSize: "17px"}}> <b style={{ color:"black" , fontWeight:'800' }}>Develop practical
                                    skills </b>through hands-on demonstrations and exercises, ensuring
                                you're confident and prepared for real-world scenarios. </li>

                            <li style={{fontSize: "17px"}}> <b style={{ color:"black" , fontWeight:'800' }}>Gain a competitive
                                    edge </b>in the job market by showcasing your commitment to
                                professional development and specialized knowledge.</li>
                        </ol>




                    </div>
                    <h2  style={{color: "#00B2D2"}} className="ps-5">Explore Our Training Program Offerings:
                    </h2>
                    <div className="ms-5">
                        <p style={{fontSize: "18px"}}><b style={{ color:"black" , fontWeight:'800' }}> Entry-Level MELT
                                TRACTOR-TRAILER PROGRAM:</b> "Master the fundamentals of
                            commercial vehicle operation and obtain your className A-Z CDL license. Our proven
                            curriculum equips you with the knowledge and skills to confidently navigate the road
                            and handle any driving situation." (Link to program page)

                        </p>
                        <p style={{fontSize: "18px"}}><b style={{ color:"black" , fontWeight:'800' }}> Air Brake
                                Endorsement:</b> "Gain the specialized knowledge and skills required to
                            operate air brake systems on tractor-trailer combinations. This intensive seminar fulfills
                            the Air Brake Endorsement training requirement, ensuring you meet all licensing
                            qualifications for operating these complex vehicles." (Link to program page)

                        </p>

                    </div>



                </div>
            </section>
          
            <div className="d-block align-items-start" style={{margin:"30px 80px"}}>
                <div className="nav block-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                        aria-selected="true" >Air Brake Endorsement "Z" (12 Hours)</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                        aria-selected="false">Regulation (HTA, TTA, CVOR, etc.)</button>
                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                        aria-selected="false">Trip Planning</button>
                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings"
                        aria-selected="false">Cargo Securement</button>
                    <button className="nav-link" id="v-pills-weight-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-weight" type="button" role="tab" aria-controls="v-pills-weight"
                        aria-selected="false">Weights and Dimensions</button>
                    <button className="nav-link" id="v-pills-crossing-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-crossing" type="button" role="tab" aria-controls="v-pills-crossing"
                        aria-selected="false">Border Crossing (if applicable)</button>
                    <button className="nav-link" id="v-pills-goods-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-goods" type="button" role="tab" aria-controls="v-pills-goods"
                        aria-selected="false">Dangerous Goods Transportation (if applicable)</button>
                    <button className="nav-link" id="v-pills-tab1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab1"
                        type="button" role="tab" aria-controls="v-pills-tab1" aria-selected="false">Hours of
                        Service</button>
                    <button className="nav-link" id="v-pills-tab2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab2"
                        type="button" role="tab" aria-controls="v-pills-tab2" aria-selected="false">Documents</button>
                    <button className="nav-link" id="v-pills-tab3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab3"
                        type="button" role="tab" aria-controls="v-pills-tab3" aria-selected="false">Coupling and
                        Uncoupling</button>
                    <button className="nav-link" id="v-pills-tab4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab4"
                        type="button" role="tab" aria-controls="v-pills-tab4" aria-selected="false">Pre-Trip
                        Inspection</button>
                    <button className="nav-link" id="v-pills-tab5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab5"
                        type="button" role="tab" aria-controls="v-pills-tab5" aria-selected="false">5th Wheel and Rear
                        Axle Adjustment (if applicable)</button>
                    <button className="nav-link" id="v-pills-tab6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab6"
                        type="button" role="tab" aria-controls="v-pills-tab6" aria-selected="false">Backing</button>
                    <button className="nav-link" id="v-pills-tab7-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab7"
                        type="button" role="tab" aria-controls="v-pills-tab7" aria-selected="false">Driving</button>
                    <button className="nav-link" id="v-pills-additional-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-additional" type="button" role="tab" aria-controls="v-pills-additional"
                        aria-selected="false">PDIC Defensive Driving Techniques</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent" style={{margin:"30px 0", textAlign:"center"}}>
                    
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                        aria-labelledby="v-pills-home-tab">
                        
                        Led by a certified Ontario Safety League instructor, this comprehensive seminar delves into the
                        intricacies of air brake systems used in tractor-trailer combinations. Students will learn how
                        to conduct an inspection of an air brake system, identifying defects, problems, and
                        abnormalities. They will learn to conduct functional tests of the airbrake system to be able to
                        indicate whether a vehicle is in compliance with safety regulations or if defective conditions
                        are present in the system. The Air Brake Adjustment module will give students knowledge of how
                        the air brakes on a vehicle can be adjusted to operate within the rules. The Air Brake Manual is
                        supplied by us.
                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                        <p>You'll gain a thorough understanding of:</p>
                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Theory and Operation:</b> Master the
                                principles behind air brake systems, including components like air compressors,
                                reservoirs, valves, and chambers. Learn how these components work together to create the
                                braking force required for a heavy commercial vehicle.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Inspection & troubleshooting:</b> Master the
                                pre-trip inspection process for air brake systems. This includes identifying key
                                components, recognizing signs of wear and tear, and conducting functional tests to
                                ensure proper operation. The seminar will equip you with the skills to troubleshoot
                                common air brake problems, such as low air pressure, uneven braking, and leaks.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Regulations and compliance:</b> Stay
                                up-to-date on relevant regulations governing air brakes as outlined by the Canadian
                                National Safety Code (NSC) Standards for Commercial Vehicles. Learn the importance of
                                maintaining your vehicle's air brake system in compliance with these safety standards to
                                ensure the safe operation of your commercial vehicle.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Adjustment techniques:</b>: (This module may
                                be included depending on the specific seminar) Gain practical skills in adjusting air
                                brake components to optimize performance and ensure safe operation. This may involve
                                adjusting slack adjusters, stroke valves, and parking brakes. <br />This seminar fulfills
                                the Air Brake Endorsement/Adjustment training requirement and empowers you to
                                confidently handle air brake systems, a critical component of safe and responsible
                                commercial vehicle operation.</li>
                        </ol>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                        aria-labelledby="v-pills-profile-tab">
                        
                        This seminar equips you with the knowledge to navigate routine inspections and understand the
                        intricacies of commercial vehicle regulations. You'll learn:
                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{margin:"10px 0"}}><b style={{color: "black",fontWeight: "800" }}>Inspection procedures:</b> Become familiar
                                with the protocols followed at Ministry of Transportation (MTO) inspection stations.
                                This includes understanding the documents required, the types of inspections conducted
                                (vehicle, driver, and cargo), and how to conduct yourself professionally during the
                                inspection process.</li>
                            <li style={{margin:"10px 0"}}><b style={{color: "black",fontWeight: "800" }}>Commercial Vehicle Inspection Reports
                                    (CVORs):</b> Gain the ability to decipher these reports, understanding what each
                                section signifies (vehicle defects, driver violations, etc.). You'll learn how to
                                address any identified issues to ensure your vehicle meets safety requirements and avoid
                                future roadside citations.</li>
                            <li style={{margin:"10px 0"}}><b style={{color: "black",fontWeight: "800" }}>Understanding Key Regulations: </b> This
                                seminar will delve into relevant regulations governing commercial vehicles, including
                                the Highway Traffic Act (HTA), the Technical Standards and Safety Requirements for
                                Commercial Motor Vehicles (CVOR), and potentially specific industry regulations
                                depending on the type of cargo you plan to haul (dangerous goods, oversize loads, etc.).
                            </li>
                        </ol>
                        <p>By understanding regulations and inspection procedures, you'll be well-prepared to navigate
                            official inspections with confidence and ensure your vehicle meets all safety requirements,
                            reducing the risk of roadside delays and fines.</p>
                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                        aria-labelledby="v-pills-messages-tab">
                        
                        Planning your trip effectively is essential for efficient and safe long-haul journeys. This
                        seminar will guide you through the critical steps involved in successful trip planning,
                        including:
                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Pre-trip considerations:</b> Learn how to
                                properly prepare your vehicle and documents for a successful trip. This includes
                                ensuring your vehicle has undergone preventative maintenance, packing essential tools
                                and supplies, verifying you have the necessary permits and documentation for your route
                                (especially for cross-border trips), and planning your fuel stops based on your
                                vehicle's range and fuel efficiency</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Obstacles and contingencies:</b> Develop
                                strategies to navigate potential obstacles that may arise during your trip, such as
                                traffic delays, bad weather conditions, and unforeseen road closures. The seminar will
                                cover resources available to stay updated on traffic conditions (e.g., traffic apps,
                                radio broadcasts) and weather forecasts to help you plan alternative routes or adjust
                                your schedule as needed.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Staying informed:</b> Master the use of
                                resources to stay updated on current traffic and weather conditions to optimize your
                                trip planning and avoid delays. This may involve utilizing trucking industry resources,
                                weather forecasting apps, and navigation tools that provide real-time traffic updates.
                            </li>
                        </ol>
                        <p>Effective trip planning ensures you arrive at your destinations on time, prepared</p>
                        <p style={{color: 'black',fontWeight: '800'}}>Beyond the Basics: Mastering Essential Skills for
                            Trucking Success (continued)</p>
                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                        aria-labelledby="v-pills-settings-tab">
                        
                        This seminar is designed to equip you with the knowledge and skills to secure cargo safely and
                        in accordance with industry regulations. You'll learn:
                        <ol style={{margin:0, padding:0}}>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Cargo weight distribution:</b> Master the
                                principles of weight distribution and how to properly load your trailer to ensure
                                stability and prevent cargo shifting during transport. This includes understanding the
                                concept of center of gravity and its impact on vehicle handling.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Securing techniques:</b> Explore various
                                methods for securing different types of cargo, including straps, tie-downs, chains,
                                dunnage (blocking and bracing materials), and specialized equipment for specific cargo
                                types. The seminar will provide hands-on practice in applying these techniques to ensure
                                your cargo arrives safely and undamaged.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Regulations and compliance:</b> Gain a
                                comprehensive understanding of Transport Canada's Cargo Securement Regulations, ensuring
                                your cargo is secured in compliance with these regulations to prevent accidents and
                                fines.</li>
                        </ol>
                        <p>By mastering cargo securement techniques, you'll demonstrate professionalism and contribute
                            to a safe and efficient transportation industry.</p>
                        <p style = {{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                    </div>
                    
                    <div className="tab-pane fade" id="v-pills-weight" role="tabpanel" aria-labelledby="v-pills-weight-tab">
                        
                        Operating a commercial vehicle involves understanding the weight and size limitations outlined
                        by regulations. This seminar will equip you with the knowledge to:
                        <ol style={{margin:0, padding:0}}>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Determine weight capacity:</b> Learn how to
                                calculate the weight capacity of your vehicle combination, considering factors like the
                                tractor, trailer, and cargo weight. You'll explore axle weight limitations and the
                                importance of staying within these limits to prevent overloading and potential damage to
                                roads and bridges.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Understanding dimensions:</b> Gain a thorough
                                understanding of the legal dimensions for commercial vehicles, including overall length,
                                width, and height. This knowledge is crucial for route planning and avoiding clearance
                                issues with tunnels, bridges, and narrow roads</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Weigh station procedures:</b> Feel confident
                                navigating weigh stations. The seminar will cover procedures followed at weigh stations,
                                how to interact with weigh station personnel, and potential consequences for exceeding
                                weight limits.</li>
                        </ol>
                        <p>By understanding weight and dimension limitations, you'll ensure safe and legal operation of
                            your commercial vehicle.</p>
                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-crossing" role="tabpanel"
                        aria-labelledby="v-pills-crossing-tab">
                        
                        This seminar is specifically designed for drivers who plan to operate across the CanadaUS
                        border. It will equip you with the knowledge and tools to navigate border crossings efficiently
                        and ensure you have the necessary documentation. You'll learn about:
                        <ol style={{margin:0, padding:0}}>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>US Entry procedures:</b> Gain a step-by-step
                                understanding of the process for entering the United States, including required
                                documentation (passport, visas, proof of insurance, etc.), inspections conducted by US
                                Customs and Border Protection (CBP), and potential delays to anticipate</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Re-entering Canada:</b> Learn about the
                                process for re-entering Canada, including required documents (commercial invoice, proof
                                of citizenship, etc.) and procedures conducted by the Canada Border Services Agency
                                (CBSA).</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Brokerage and permits:</b> Explore the
                                potential need for brokers to assist with complex cross-border shipments and understand
                                any specific permits required for transporting certain goods across the border.</li>
                        </ol>
                        <p>By understanding border crossing procedures, you'll save time and avoid unnecessary delays
                            during your cross-border journeys</p>
                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-goods" role="tabpanel" aria-labelledby="v-pills-goods-tab">
                        
                        The transportation of dangerous goods requires specialized knowledge and adherence to strict
                        regulations. This in-depth seminar covers:
                        <ol style={{margin:0, padding:0}}>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Driver requirements:</b> Explore the specific
                                training and licensing requirements mandated by the Transportation of Dangerous Goods
                                (TDG) Regulations and the Ontario Dangerous Goods Transportation Act for drivers hauling
                                hazardous materials.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>classNameification and packaging:</b> Learn how
                                dangerous goods are classNameified (explosives, flammables, toxic materials, etc.) and the
                                specific packaging requirements for each classNameification to ensure safe transport.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Incident response:</b> Gain crucial knowledge
                                on how to respond safely in the event of an accident or spill involving dangerous goods.
                                This includes understanding emergency procedures, evacuation protocols, and proper
                                communication with emergency responders.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Shipping papers and security:</b> Master the
                                proper handling of shipping documents for dangerous goods and understand security
                                measures required to prevent unauthorized access or theft.</li>
                        </ol>
                        <p>By successfully completing this seminar, you'll be qualified to transport dangerous goods
                            safely and responsibly, opening up potential career opportunities in this specialized area
                            of the trucking industry.</p>
                        <p style={{ color:'red' }}> *This program does not require approval under the Private Career
                            Colleges Act, 2005</p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab1" role="tabpanel" aria-labelledby="v-pills-tab1">
                        
                        Understanding and adhering to hours of service (HOS) regulations is essential for ensuring
                        driver safety and preventing fatigue. This seminar will equip you with a comprehensive
                        understanding of:
                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>HOS regulations:</b> Learn the details of HOS
                                rules outlined in the Canadian Highway Traffic Act and the US Federal Motor Carrier
                                Safety Administration (FMCSA) regulations. This includes limitations on driving time,
                                on-duty time, and mandatory rest periods.
                            </li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Recordkeeping: </b> Master the proper methods
                                for recording your hours of service using logbooks or electronic logging devices (ELDs)
                                as mandated by regulations.
                            </li>
                        </ol>
                        <p>By adhering to HOS regulations, you'll contribute to a safer work environment for yourself
                            and other road users, while avoiding potential fines and penalties for noncompliance</p>
                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab2" role="tabpanel" aria-labelledby="v-pills-tab2">
                        
                        Commercial vehicle drivers are required to maintain a variety of documents for
                        inspections and record-keeping purposes. This seminar will ensure you have a clear
                        understanding of:
                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Required documents:</b> Learn about the
                                essential documents you must carry while
                                operating a commercial vehicle, including your driver's license, vehicle registration,
                                insurance documents, permits (if applicable), weight certificates, and pre-trip
                                inspection
                                reports.
                            </li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Document organization: </b> : The seminar
                                will provide guidance on effectively organizing
                                your documents for easy access during inspections. This may involve using clear
                                folders, binders, or digital document management systems. </li>
                        </ol>
                        <p>By maintaining proper documentation, you'll demonstrate professionalism and ensure a
                            smooth experience during roadside inspections.</p>
                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab3" role="tabpanel" aria-labelledby="v-pills-tab3">
                        Safely coupling and uncoupling your trailer is a crucial skill for commercial vehicle
                        operators. This seminar will provide you with the knowledge and hands-on practice to:
                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Conduct safety checks:</b> Learn how to
                                perform thorough pre-coupling and preuncoupling inspections to ensure the safety of
                                yourself and others around you.
                            </li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Coupling procedures: </b> Master the
                                step-by-step process of coupling your tractor to a
                                trailer, including using kingpins, landing gear, and air line connections. </li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Uncoupling procedures: </b>Gain the skills to
                                safely uncouple your trailer from the tractor,
                                ensuring proper brake application and secure trailer positioning. </li>

                        </ol>
                        <p>By mastering these procedures, you'll gain the confidence and competence to handle
                            coupling and uncoupling tasks efficiently and safely.</p>
                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab4" role="tabpanel" aria-labelledby="v-pills-tab4">
                        
                        A thorough pre-trip inspection is essential for ensuring the safe operation of your
                        commercial vehicle. This seminar will equip you with a comprehensive checklist and
                        guide you through the process of inspecting:
                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Vehicle exterior:</b> Learn how to inspect
                                tires for wear and tear, proper inflation, and
                                damage. You'll also cover lights, turn signals, mirrors, windshield wipers, and all
                                external components for functionality and proper working order.</li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Vehicle interior: </b>The seminar will guide
                                you through inspecting gauges and warning
                                lights, ensuring proper fluid levels (oil, coolant, etc.), and verifying the
                                functionality of
                                brakes, steering, and other critical systems. </li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Cargo securement: </b>Ensure your cargo is
                                secure and properly fastened before every
                                trip. The seminar will remind you to check straps, tie-downs, and other securing
                                mechanisms for tightness and potential damage.</li>

                        </ol>
                        <p>By conducting thorough pre-trip inspections, you'll identify and address any potential
                            issues before they escalate into problems on the road, promoting safety and preventing
                            breakdowns.
                        </p>
                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab5" role="tabpanel" aria-labelledby="v-pills-tab5">
                        
                        This seminar will cover the procedures for making adjustments to the fifth wheel and
                        rear axles of your tractor-trailer combination, ensuring optimal performance and safe
                        operation. (Note: Depending on the specific program, this topic may be covered in the
                        Air Brake Endorsement seminar).
                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Fifth wheel adjustment:</b> Learn how to
                                properly adjust the fifth wheel to ensure a
                                secure connection between the tractor and trailer. This may involve adjusting slack
                                adjusters to minimize play and prevent unwanted movement during travel.
                            </li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Rear axle adjustment: </b> Gain an
                                understanding of how to adjust the suspension and ride
                                height of the rear axles. This can be crucial for maintaining proper weight distribution
                                and ensuring safe handling of your vehicle.</li>


                        </ol>

                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges
                            Act, 2005</p>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab6" role="tabpanel" aria-labelledby="v-pills-tab6">
                        
                        Mastering the art of backing up a tractor-trailer is an essential skill for commercial
                        vehicle drivers. This seminar will provide you with the knowledge and practical
                        exercises to:

                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Safe maneuvering techniques:</b> Learn proper
                                positioning strategies and techniques for
                                backing up in various situations, such as tight spaces, loading docks, and blind
                                corners.
                            </li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Mirror adjustments and blind spot awareness:
                                </b>Gain an understanding of how to
                                adjust your mirrors to eliminate blind spots and effectively monitor your surroundings
                                while backing up.
                            </li>

                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Communication and signaling:</b>The seminar
                                will emphasize the importance of clear
                                communication with spotters (if available) and proper use of turn signals to indicate
                                your
                                backing maneuvers.


                            </li>
                            <br />
                            <p>By developing your backing skills, you'll increase your efficiency and confidence in
                                maneuvering your vehicle in tight spaces and loading situations.
                            </p>
                        </ol>

                    </div>
                    <div className="tab-pane fade" id="v-pills-tab7" role="tabpanel" aria-labelledby="v-pills-tab7">
                        
                        This seminar focuses on honing your driving skills and knowledge to navigate various
                        road conditions and traffic scenarios safely and efficiently. You'll gain practical
                        experience in:

                        <ol style={{margin:0, padding:0}} type="1">
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Defensive driving techniques:</b>   Master the principles of defensive driving, including
                                anticipating hazards, maintaining a safe following distance, and being aware of your
                                surroundings.
                              
                            </li>
                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}> Shifting techniques:
                                </b>Learn proper gear selection and shifting techniques for optimal
                                fuel efficiency and smooth operation of your vehicle, especially on hills and inclines.
                            </li>

                            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Handling emergencies:</b>Gain crucial knowledge on how to react safely in emergency
                                situations, such as tire blowouts, sudden stops, and inclement weather conditions.


                            </li>
<br />
                            <p>By refining your driving skills and knowledge, you'll become a safer and more
                            </p>
                            <p style={{color: 'black', fontWeight: "900"}}>Beyond the Basics: Mastering Essential Skills for Trucking Success (continued)</p>
                        <p style={{ color:'red' }}>*This program does not require approval under the Ontario Career Colleges Act, 2005</p>
                        </ol>   
                    </div>
                    <div className="tab-pane fade" id="v-pills-additional" role="tabpanel"
                        aria-labelledby="v-pills-additional-tab">
                        
                        The Canada Safety Council’s P D I C Course has been designed to help drivers become better and safer
drivers. It provides students with the knowledge and insights necessary to prepare themselves for safe
driving in all conditions. The course enables drivers to better avoid the problems other users create.
They learn proper professional driving techniques that they can apply to good driving habits. You'll
learn:
<ol style={{margin:0, padding:0}} type="1">
    <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Heightened awareness:</b>Develop strategies to stay focused and minimize distractions
        while driving. This includes managing fatigue, being aware of blind spots, and
        anticipating potential hazards on the road.</li>

        <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Seeing and being seen: </b> Master proper mirror adjustments and scanning techniques to
            ensure a 360-degree view of your surroundings. You'll also learn the importance of
            using headlights and turn signals effectively to communicate your intentions to other
            drivers.</li>
            <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Managing speed and maintaining space: </b>Explore the importance of adjusting your
                speed based on road conditions, traffic flow, and weather. The seminar will emphasize
                maintaining a safe following distance and avoiding aggressive driving maneuvers.</li>
                <li style={{margin:"10px 0"}}><b style={{ color:"black" , fontWeight:'800' }}>Safe winter driving techniques:</b>Gain valuable knowledge and skills for navigating
                    challenging winter road conditions. This may include techniques for handling snow and
                    ice, proper braking on slippery surfaces, and maintaining traction control.</li>
                    <br />
                    <h4>Resources</h4>
                    <p>Students will be supplied with the Professional Driver Improvement seminar manual</p>
<p className="text-center">"Driving to Prevent Collisions" providing additional resources to enhance their learning and
    reinforce safe driving practices."</p>
                </ol>
                    </div>
                </div>
            </div>




,


</main>
   
        </>
    )
}
