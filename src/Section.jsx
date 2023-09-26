import React from 'react'
import banking_image from './assets/images/icon-online.svg'
import budget_image from './assets/images/icon-budgeting.svg'
import onboarding_image from './assets/images/icon-onboarding.svg'
import openAi_image from './assets/images/icon-api.svg'
import currency_image from './assets/images/image-currency.jpg'
import restaurant_image from './assets/images/image-restaurant.jpg'
import plane_image from './assets/images/image-plane.jpg'
import confetti_image from './assets/images/image-confetti.jpg'

const Section = () => {
  return (
    <>

        <section className="main_section">
            
            <div className="section_two">
                <div className="section_two_heading">
                    <h2 className="section_two_headingOne">Why Choose Easybank?</h2>
                    <p className="section_two_first_parag" >We leverage Open Banking to turn your bank account
                        into your financial hub.
                    </p>
                    <p className="section_two_parag" >Control your Finances like never before.
                    </p>

                </div>

                <div className="section_two_body">

                    <div className="section_two_OnlineBanking  section_two_topics">
                        <img src={banking_image} alt="icon-online"/>
                        <h3 className="section_two_second_heading">Online Banking</h3>
                        <p className="section_two_parag">Our modern web and mobile applications allow you to keep track of your
                            finances wherever you are in the world.
                        </p>
                    </div>

                    <div className="section_two_SimpleBudgeting section_two_topics">
                        <img src={budget_image} alt="icon-budgeting"/>
                        <h3 className="section_two_second_heading">Simple Budgeting</h3>
                        <p className="section_two_parag">See exactly where your money goes each month. Receive notifications when
                            you're close to your hitting limits.
                        </p>
                    </div>

                    <div className="section_two_FastOnboarding section_two_topics">
                        <img src={onboarding_image} alt="icon-onboarding"/>
                        <h3 className="section_two_second_heading">Fast Onboarding</h3>
                        <p className="section_two_parag">We dont do branches. Open your account in minutes and start taking control
                            of your finances right away.
                        </p>
                    </div>

                    <div className="section_two_OpenApi section_two_topics">
                        <img src={openAi_image} alt="icon-api"/>
                        <h3 className="section_two_second_heading">Open API</h3>
                        <p className="section_two_parag">Manage your savings, investments, pension and much more from one account.
                            Tracking your money has never been easier.
                        </p>
                    </div>

                </div>



            </div>
            
            
            <h2 className="section_three_heading">Latest Articles</h2>
            <div className="section_three">
                <figure className="article_figure currency_figure">
                    <img src={currency_image} alt="image-currency"/>
                    <figcaption>
                        <p className="author">By Claire Robinson</p>
                        <a href="#" className="figcaption_heading_link"><h4 className="figcaption_heading">Receive money in any currency with no fees</h4></a>
                        <p className="figcaption_parag">The world is getting smaller and we're becoming more mobile.
                            so why should you be forced to only receive money in a single...
                        </p>
                    </figcaption>               
                </figure>

                <figure className="article_figure">
                    <img src={restaurant_image} alt="image-restaurant"/>

                    <figcaption>
                        <p className="author">By Wilson Hutton</p>
                        <a href="#" className="figcaption_heading_link"><h4 className="figcaption_heading"  >Treat yoursef without worrying about money</h4></a>
                        <p className="figcaption_parag">Our simple budgeting feature allows you to separate out your spending
                            and set realistic limits each month. That means you...
                        </p>
                    </figcaption>
                </figure>

                <figure className="article_figure plane_figure">
                    <img src={plane_image} alt="image-plane"/>
                    
                    <figcaption>
                        <p className="author">By Wilson Hutton </p>
                        <a href="#" className="figcaption_heading_link"><h4 className="figcaption_heading">Take your Easybank card wherever you go</h4></a>
                        <p className="figcaption_parag">We want you to enjoy your travels. This is why we dont charge any fees
                            on purchases while you're abroad. We'll even show you...
                        </p>
                        
                    </figcaption>
                </figure>
                
                <figure className="article_figure confetti_figure" id="final_figure">
                    <img src={confetti_image} alt="image-confetti"/>
                    <figcaption>
                        <p className="author">By Claire Robinson</p>
                        <a href="#" className="figcaption_heading_link"><h4 className="figcaption_heading">Our invite-only Beta accounts are now live!</h4></a>
                        <p className="figcaption_parag figcaption_final_parag">After a lot of hard work by the whole team, we're excited to launch our closed
                            beta. It's easy to request an invite through the site...
                        </p>
                    </figcaption>
                </figure>

            </div>
        </section>
        
    
    
    </>
    
  )
}

export default Section