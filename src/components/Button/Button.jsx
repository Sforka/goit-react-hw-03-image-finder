import PropTypes from 'prop-types';
import css from 'components/Button/Button.module.css';

export default function Button({ nextPage }) {
  return (
    <button type="button" className={css.Button} onClick={nextPage}>
      Load more
    </button>
  );
}

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
