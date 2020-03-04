import React from 'react';
import './UserOutput.css';


class UserOutput extends React.Component {
	render() {
    return (
      <div className="UserOutput">
        <h3>Auther: {this.props.userName}</h3>
        <p>
          I'm baby thundercats art party readymade beard normcore. Post-ironic hella 90's, 
          taxidermy mlkshk iPhone cloud bread ramps tumeric. Umami gochujang palo santo wolf 
          echo park next level shoreditch pour-over twee. Snackwave selfies kickstarter 
          tattooed raclette plaid pok pok listicle.
        </p>
        <p>
          Jean shorts keytar subway tile tacos, literally la croix prism pitchfork small batch 
          gastropub 8-bit echo park adaptogen. Williamsburg sartorial venmo cray, pork belly 
          kickstarter bespoke banh mi lomo direct trade raw denim selfies trust fund try-hard 
          artisan. Retro yuccie keffiyeh iceland wayfarers unicorn jianbing cliche austin vice 
          live-edge. Cloud bread cornhole adaptogen pok pok readymade narwhal aesthetic skateboard 
          VHS sriracha photo booth affogato hot chicken live-edge. Drinking vinegar celiac roof 
          party helvetica.
        </p>
      </div>
    );
  };
};

export default UserOutput;