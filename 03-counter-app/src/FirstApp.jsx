import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle}) => {    
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}
//no usar porque será removido en versiones superiores
//mejor usar los parametros por defecto de js
FirstApp.defaultProps = {
  title: 'No hay titulo', 
  subtitle: 'No hay subtitulo'
}
