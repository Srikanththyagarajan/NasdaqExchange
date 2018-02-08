import React from 'react';
import TeamMember from './TeamMember';

const About = () => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2>About Us</h2>

          <p>NasdaqExchange is a fast, reliable and fully transparent cryptocurrency exchange built on top of NodeJS, ReactJS, for hackthon.</p>
          <p>Our team came together to make this platform after seeing firsthand the need for a fast and reliable exchange on the crypto market.</p>
          <p>We pride ourselves on total transparency To support our mission of making crypto accessible to everyone, we’ve made our <b><a href="https://github.com/Srikanththyagarajan" target="_blank">front end client completely open source <i className="fa fa-github" aria-hidden="true"></i></a></b>.</p>

          <div id="team-members" className="row">
            <TeamMember id="Srikanth" name="srikanth" country="IN" fullCountryName="India"
              description="Srikanth Thyagarajan, UI developer, BNC team"
              social={{
                linkedin: "https://www.linkedin.com/in/srikanth-thyagarajan-14358a3b/",
                github: "hhttps://github.com/Srikanththyagarajan",
              }} />

            <TeamMember id="Myank" name="Myank" country="IN" fullCountryName="India"
              description="Myank Sharma, Java Developer, BNC Team"
              social={{
                linkedin: "https://www.linkedin.com/in/mayank-sharma-46672123/",
              }}/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;