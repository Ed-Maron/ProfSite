import React from 'react';
import PublicSidebar from './publicSidebar';
import Content from './mainPageContent/content';

export default class PublicPage extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
		
			<div className={'main_page'}>
				<PublicSidebar />
				<Content />
			</div>
		)
	}
}