import PropTypes from 'prop-types';
import axios from 'axios';

export default function FetchImages(inputValue, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${inputValue}&page=${page}&key=33578687-dc3774f79e443000bcff80f6a&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

FetchImages.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};