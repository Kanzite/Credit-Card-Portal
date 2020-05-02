import React, { Component } from 'react';
import Form from './FormComponent';
import Card from './CardComponent';

class Container extends Component {

	constructor(props) {
		super(props);

		this.state = {
			cardnumber: '',
			name: '',
			expiry: '',
			cvv: '',
			type: 'CARD TYPE',
			show: true
		};

		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleKeyUp(event) {
		if(event.target.name === 'expiry' && event.target.value.length === 2 && event.keyCode !== 8) {
			event.target.value = event.target.value + '/';
			this.handleInputChange(event);
		}

		else if(event.target.name === 'cardnumber' && (event.target.value.length === 4 || event.target.value.length === 9 || event.target.value.length === 14) && event.keyCode !== 8) {
			event.target.value = event.target.value + ' ';
			this.handleInputChange(event);
		}

		if(event.target.name === 'cvv')
			this.setState({ show: false });
		else
			this.setState({ show: true });
	}

	handleInputChange(event) {
		var target = event.target;
		var value = target.value;
		var name = target.name;

		if(event.target.name === 'cardnumber') {
			if(event.target.value.length === 0)
				this.setState({ type: 'INVALID TYPE'});
			else if(event.target.value[0] === '3') {
				if(event.target.value[1] === '7')
					this.setState({ type: 'American Express'});
				else if(event.target.value[1] === '8')
					this.setState({ type: 'Diners Club'});
			}
			else if(event.target.value[0] === '4')
				this.setState({ type: 'VISA'});
			else if(event.target.value[0] === '5')
				this.setState({ type: 'MasterCard'});
			else if(event.target.value[0] === '6')
				this.setState({ type: 'Discover Card'});
			else
				this.setState({ type: 'INVALID TYPE'});
		}

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		alert('Card Saved');
		event.preventDefault();
	}

	render() {
		return(
			<div className="containerwrapper">
				<section className="left">
					<section className="texthead"> Add Credit Card Details: </section>
					<Form handleKeyUp={ this.handleKeyUp } handleInputChange={ this.handleInputChange } handleSubmit={ this.handleSubmit } state={ this.state }/>
				</section>
				<section className="right">
					<section className="texthead"> Saved Credit Cards: </section>
					<Card state={ this.state }/>
				</section>
			</div>
		);
	}

}

export default Container;
