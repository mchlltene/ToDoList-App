import PropTypes  from "prop-types";

const Welcome =({name,prodi,gender}) => {
    return (
        <h1> Hi {name} from {prodi}, Welcome to React {gender}</h1>
    )
}
Welcome.propTypes ={
    name: PropTypes.string,
    prodi: PropTypes.string
}

Welcome.defaultProps ={
    gender: 'Male'
}

export default Welcome;