import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import FetchImages from './services/Api';
import Loader from './Loader/Loader';
import Modal from 'components/Modal/Modal';
import css from 'components/App.module.css';

export class App extends Component {
  state = {
    inputValue: '',
    images: [],
    loading: false,
    error: null,
    loadButton: false,
    page: 0,
    hits: 0,
    largeImage: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const prevInputValue = prevState.inputValue;
    const { inputValue, page, images } = this.state;
    if (prevPage !== page || prevInputValue !== inputValue) {
      this.setState({ loading: true });
      const response = FetchImages(this.state.inputValue, this.state.page);
      response
        .then(res => {
          this.setState({ hits: res.data.hits.length });
          res.data.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              !images.some(image => image.id === id) &&
              this.setState(({ images }) => ({
                images: [...images, { id, webformatURL, largeImageURL, tags }],
              }))
            );
          });
          console.log(this.state.images);
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }

  searchSubmit = inputValue => {
    this.setState({
      inputValue,
      page: 1,
      images:[]
    });
  };

  nextPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = index => {
    this.setState(({ images }) => ({
      showModal: true,
      largeImage: images[index].largeImageURL,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.searchSubmit} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal} largeImage={this.state.largeImage} />
        )}
        {this.state.loading && <Loader />}
        {this.state.hits >= 12 && <Button nextPage={this.nextPage} />}
      </div>
    );
  }
}