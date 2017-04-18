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
			  <div className="row">
			    <div className="col-md-4">
			      <div className={this.state.condition ? 'card nonono' : 'card hahaha'} >
			        <div onClick={() => alert(this.props.info.url)} className="card-image">

			          <img src="" alt={this.props.info.thumbUrl}/>
			          <span className="card-title">Card</span>
			          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"></i></a>
			        </div>
			        <div className="card-content">
			   
			          <p onClick={() => alert(this.props.info.url)}>{this.props.info.id}</p>
			          <p onClick={() => alert(this.props.info.url)}><a href={	this.props.info.url}>Link</a></p>
			          <button onClick={() => {this.setState({condition: !this.state.condition})}} className="btn btn-success">Like</button>
			        </div>
  
			      </div>
			    </div>

			  </div>
           
          </div>
			);
	}
}