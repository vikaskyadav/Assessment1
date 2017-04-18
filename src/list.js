import React from 'react';
import Card from './card.js';
export default class List extends React.Component{

constructor(props) {
	super(props);
	this.data=[{
    id:'1',
    url:"abc.html",
    thumbUrl:"abc1.html"

	},
	{
    id:'2',
    url:"abc.html",
    thumbUrl:"abc1.html"

	},
	{
    id:'3',
    url:"abc.html",
    thumbUrl:"abc1.html"

	},
	{
    id:'4',
    url:"abc.html",
    thumbUrl:"abc1.html"

	}


	];

}
	render() {
		
var list=[];
for(var i=0; i< this.data.length;i++){
	list.push(<Card info={this.data[i]}></Card>);
}
		return(
<div>{list}</div>
		   );
	}
}