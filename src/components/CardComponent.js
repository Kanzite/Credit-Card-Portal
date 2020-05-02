import React, { Component } from 'react';

class Card extends Component {

	constructor(props) {
		super(props);

		this.cardref = React.createRef();

		this.defaultcardnumber = '**** **** **** ****';
		this.defaultname = 'FULL NAME';
		this.defaultexpiry = '**/**';
		this.defaultcvv = '***';
	}

	componentDidMount() {
		setTimeout(() => {
			this.cardref.current.classList.add('active');
		}, 300);
	}

	Out(name) {
		if(name === 'cardnumber')
			return(this.props.state.cardnumber + this.defaultcardnumber.substring(this.props.state.cardnumber.length, 19));
		else if(name === 'expiry')
			return(this.props.state.expiry + this.defaultexpiry.substring(this.props.state.expiry.length, 5));
		else if(name === 'cvv')
			return(this.props.state.cvv + this.defaultcvv.substring(this.props.state.cvv.length, 3));
		else if(name === 'name') {
			if(this.props.state.name.length === 0)
				return(this.defaultname);
			else
				return(this.props.state.name);
		}

	}

	CardInstance() {
		if(this.props.state.show === true)
			return(
				<section className="cardbody" ref={this.cardref}>
					<section className="chip"> </section>
					<section className="texttype"> { this.props.state.type } </section>
					<section className="textcardnumber"> { this.Out('cardnumber') } </section>
					<section className="textname"> { this.Out('name') } </section>
					<section className="textexpiry"> { this.Out('expiry') } </section>
				</section>
			);
		else {
			return(
				<section className="cardbody" ref={this.cardref}>
					<section className="barone"> </section>
					<section className="bartwo"> </section>
					<section className="textcvv"> { this.Out('cvv') } </section>
				</section>
			);
		}
	}

	render() {
		return(
			<div className="card">
				{ this.CardInstance() }
			</div>
		);
	}

}

export default Card;
