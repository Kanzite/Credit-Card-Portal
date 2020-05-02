import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super(props);

		this.formref = React.createRef();
	}

	componentDidMount() {
		setTimeout(() => {
			this.formref.current.classList.add('active');
		}, 100);
	}

	render() {
		return(
			<div className="formcard" ref={this.formref}>
				<form onSubmit={this.props.handleSubmit}>
					<input type="text" className="textinp" name="cardnumber" placeholder="Card Number" minLength="19" maxLength="19" pattern="[0-9 ]+" value={this.props.state.cardnumber} onChange={this.props.handleInputChange} onKeyUp={this.props.handleKeyUp} required/>
					<input type="text" className="textinp" name="name" placeholder="Full Name" pattern="[a-zA-Z ]+" value={this.props.state.name} onChange={this.props.handleInputChange} required/>
					<input type="text" className="textinp exp" name="expiry" placeholder="Expiry (MM/YY)" minLength="5" maxLength="5" pattern="[0-9/]+" value={this.props.state.expiry} onChange={this.props.handleInputChange} onKeyUp={this.props.handleKeyUp} required/>
					<input type="text" className="textinp cvv" name="cvv" placeholder="CVV" minLength="3" maxLength="3" pattern="[0-9]+" value={this.props.state.cvv} onChange={this.props.handleInputChange} onKeyDown={this.props.handleKeyUp} required/>
					<button className="buttonsubmit"> Save </button>
				</form>
			</div>
		);
	}

}

export default Form;
