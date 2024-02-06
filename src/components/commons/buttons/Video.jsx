import PropTypes from 'prop-types';

export default function Video({ controls, video, label }) {
  return (
    <div className="video">
        <div className="top-video"></div>
        <video src={video} autoPlay loop muted controls={controls}></video>
        <p>{label}</p>
    </div>
  )
}

Video.propTypes = {
    controls: PropTypes.bool,
    video: PropTypes.string.isRequired,
    label: PropTypes.string
};
