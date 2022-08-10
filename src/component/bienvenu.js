import PropTypes  from "prop-types";
const Bienvenu = ({nom,age}) => {
    return (
        <div>
            <p style={{color: "red",fontSize:"2rem"}}>Bienvenue {nom} sur l'application React!</p>
            <p>Vous avez {age} ans!</p>
        </div>
    )
}

Bienvenu.defaultProps = {
    age : 18
}


Bienvenu.propTypes = {
    nom : PropTypes.string.isRequired,
    age :PropTypes.number.isRequired
}


export default Bienvenu;