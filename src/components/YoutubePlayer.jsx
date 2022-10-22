import PropTypes from 'prop-types'

function YoutubePlayer({ videoId }) {
  return (
    <div className='aspect-w-16 aspect-h-9'>
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title='youtubeVideo'
            >
                
        </iframe>
    </div>
  )
}

YoutubePlayer.propTypes = {
    videoId: PropTypes.string.isRequired
}

export default YoutubePlayer
