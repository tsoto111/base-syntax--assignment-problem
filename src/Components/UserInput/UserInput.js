import React from 'react';
import './UserInput.css';

class UserInput extends React.Component {

	style = {
		fontWeight: 'bold',
		fontSize: '1.17em'
	}

	render() {
		return (
			<div className="UserInput field-group">
				<label style={this.style}>Update Author</label>
				<input type="type" onChange={this.props.updateName} value={this.props.userName} />
			</div>
		);
	}
};

export default UserInput;
