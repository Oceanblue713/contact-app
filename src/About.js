import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <div className="about" id="about">
                <div className="about-us">
                    <h2 className="about-clinic">医院紹介</h2>
                    <p>私たちさわだ歯科は平成7年に沖縄県浦添市勢理客に開院以降、地域の皆さまと共に歩んで参りました。<br />
                    </p>
                </div>
                <div className="about-doctor">
                    <h4>医院長</h4>
                    <h5>澤田泰治（さわだ たいじ)</h5>
                </div>
            </div>
        )
    }
}

export default About;