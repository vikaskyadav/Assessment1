import React from 'react';

export default class Card extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			condition: false
		}
	}

	render() {
		return (
            <div className="container">       
			

  <div className={this.state.condition ? 'card nonono' : 'card hahaha'}>
        <div className="card-image">
           <img className="responsive-img" src={this.props.info.thumbUrl} alt={this.props.info.thumbUrl}/>
	 </div>
        <div className="card-content">
          <p onClick={() => alert(this.props.info.url)}>ID : {this.props.info.id}</p>
			          <p onClick={() => alert(this.props.info.url)}><a href={	this.props.info.url}>Link to the Url.</a></p>
			          <button onClick={() => {this.setState({condition: !this.state.condition})}} className="btn btn-success">Like
    
            </button>
			       </div>
      </div>
    
  </div>
			);
	}
}