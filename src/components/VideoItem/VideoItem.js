import PropTypes from 'prop-types';
import React from 'react';
import YouTube from 'react-youtube';
import './VideoItem.css';

function VideoItem(props) {

	return (
		<div className='VideoItem'>
			<div className ='VideoItem__video'>
				<YouTube
					videoId={ props.content.videoId }
					opts={{
						height: '100%',
						width: '100%'
					}}
				/>
			</div>
		</div>
	);
}

export default VideoItem;

VideoItem.propTypes = {
	content: PropTypes.shape({		
		name: PropTypes.string.isRequired,
		videoId: PropTypes.string.isRequired,
	})
}