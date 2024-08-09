import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle}) => {    
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
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
  subtitle: 'No hay subtitulo'
}
