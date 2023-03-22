import React from "react";
import FillerCard from "./FillerCard";
import SavingInvesting from "assets/SavingVInvesting.jpg"

const AboutUs = () => {
    return(
        <div style={{ padding: '2em' }}>
            <h1 style={{ color: 'var(--primary-color)'}}>About Us</h1>
            
            <div className="col-12">
                <FillerCard
                    image={SavingInvesting}
                     title={"Investing Simulator"}
                     subtitle={"Investing Simulator App Created By Group 24. Our inspiration for this web application is due to our love for investing in the stock market and creating an ability for us to invest safely with no real world money. Authors: Andy C. Mathew W. Harry N. Denzel N."}
                     >
                </FillerCard>
            </div>
        </div>
    );
}
export default AboutUs;