import React from 'react';
import classes from './PokemonCard.css';

export default class PokemonCard extends React.Component {

	static propTypes = {
		addNew: React.PropTypes.bool,
		id: React.PropTypes.string,
		url: React.PropTypes.string,
		name: React.PropTypes.string,
		contributor: React.PropTypes.string,
		onNameChange: React.PropTypes.func,
		onUrlChange: React.PropTypes.func,
		onContributorChange: React.PropTypes.func,
	}

	render () {
		const editable = !!this.props.onNameChange;

		return (
			<div className={classes.root}>
				<div className={classes.header + ' ' + (this.props.addNew ? classes.newHeader : '')}>
					<div className={classes.title + ' ' + (this.props.addNew ? classes.newTitle : '')}>
						DRINKS NAME
					</div>
					<input
						className={classes.content + ' ' + (this.props.addNew ? classes.newContent : '') + ' ' + classes.name}
						placeholder="Type drink's name..."
						value={this.props.name}
						disabled={!editable}
						onChange={(e) => this.props.onNameChange(e.target.value)}
					/>
				</div>
				<div className={classes.imageContainer}>
					<div className={classes.header + ' ' + (this.props.addNew ? classes.newHeader : '')}>
					<div className={classes.title + ' ' + (this.props.addNew ? classes.newTitle : '')}>
						YOUR NAME
					</div>
					<input
						className={classes.content + ' ' + (this.props.addNew ? classes.newContent : '') + ' ' + classes.contributor}
						placeholder="Type your name..."
						value={this.props.contributor}
						disabled={!editable}
						onChange={(e) => this.props.onContributorChange(e.target.value)}
					/>
					</div>
				</div>
				<div className={classes.imageContainer}>
					<div className={classes.header + ' ' + (this.props.addNew ? classes.newHeader : '')}>
						<div className={classes.title + ' ' + (this.props.addNew ? classes.newTitle : '')}>
							IMAGE URL
						</div>
						<input
							className={classes.content + ' ' + (this.props.addNew ? classes.newContent : '') + ' ' + classes.link}
							placeholder="A link to Pokemons's image"
							value={this.props.url}
							disabled={!editable}
							onChange={(e) => this.props.onUrlChange(e.target.value)}
						/>
					</div>
					<div className={classes.cardImageWrapper}>
						<img className={classes.cardImage} src={this.props.url} />
					</div>
					<div>
						ID: {this.props.id ? this.props.id : 'N/A'}
					</div>
				</div>
			</div>
		);
	}
}
