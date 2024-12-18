import React from 'react';

import Arrows from "../components/Arrows";
import Button from "../components/Button";
import {images} from "../lib/images";
import Testimonial from "../components/Testimonial";

function Main() {
    return (
        <div>
            <section className="baniere">
                <div className="baniere-content">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa cum cumque deleniti
                        dolore, ducimus iusto maiores natus neque nisi nostrum nulla numquam odit omnis, porro quisquam
                        repudiandae. Fugit, omnis.</p>
                    <Button nom={"Reserve a table"}/>
                </div>
                <div className='baniere-img'>
                    <div>
                        <button>Occasional Menu</button>
                        <img src={images.baniereimage} alt="Baniere image" width={375} height={432}/>
                    </div>
                </div>
            </section>
            <section className="speciale">
                <div className="speciale-content">
                    <div className="title">
                        <h1>This week's specials</h1>
                        <Arrows/>
                    </div>
                    <Button nom={"Online Menu"}/>
                </div>
                <div className="cart">
                    {/* Cart Item 1 */}
                    <div className="cart-item">
                        <div className="cart-img">
                            <img src={images.greek_salad} alt="Greek Salad" width={265} height={185}/>
                        </div>
                        <div className="cart-content">
                            <div className="cart-title">
                                <h3>Greek Salad</h3>
                                <h5>$33.95</h5>
                            </div>
                            <div className="cart-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic neque nulla velit
                                    veritatis voluptatibus. Earum illo libero non possimus repudiandae.F</p>
                            </div>
                            <a href="#">Order a delivery <i></i></a>
                        </div>
                    </div>

                    {/* Cart Item 2 */}
                    <div className="cart-item">
                        <div className="cart-img">
                            <img src={images.bruchetta} alt="Bruchetta" width={265} height={185}/>
                        </div>
                        <div className="cart-content">
                            <div className="cart-title">
                                <h3>Bruchetta</h3>
                                <h5>$12.95</h5>
                            </div>
                            <div className="cart-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic neque nulla velit
                                    veritatis voluptatibus. Earum illo libero non possimus repudiandae.F</p>
                            </div>
                            <a href="#">Order a delivery <i></i></a>
                        </div>
                    </div>

                    {/* Cart Item 3 */}
                    <div className="cart-item">
                        <div className="cart-img">
                            <img src={images.lemon_dessert} alt="Lemon Dessert" width={265} height={185}/>
                        </div>
                        <div className="cart-content">
                            <div className="cart-title">
                                <h3>Lemon Dessert</h3>
                                <h5>$8.95</h5>
                            </div>
                            <div className="cart-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic neque nulla velit
                                    veritatis voluptatibus. Earum illo libero non possimus repudiandae.F</p>
                            </div>
                            <a href="#">Order a delivery <i></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='testimonial'>
                <h2>Testimonials</h2>

                <div className="testimonial-list">
                   <Testimonial
                       image={images.mario_adri1}
                       firstName="First name"
                       lastName="Last name"
                       text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                   />
                    <Testimonial
                        image={images.mario_adri1}
                        firstName="First name"
                        lastName="Last name"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    /><Testimonial
                        image={images.mario_adri1}
                        firstName="First name"
                        lastName="Last name"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    />
                </div>

            </section>

            <section className="about">
                <div className="part1">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto assumenda atque beatae
                        culpa dicta dolore dolorem eaque earum eligendi error exercitationem fugiat harum id illum,
                        incidunt inventore ipsa nam natus nostrum omnis porro praesentium provident quisquam quo
                        recusandae sequi tempora tenetur voluptate voluptatibus. Perferendis porro quas quasi ratione
                        voluptate.
                    </p>
                </div>
                <div className="part2">
                    <img className={'img1'} src={images.mario_adri1} alt="Mario adri"  width={272} height={336}/>
                    <img className={'img2'} src={images.mario_adri1} alt="Mario adri"  width={272} height={336}/>
                </div>
            </section>
        </div>
    );
}

export default Main;
