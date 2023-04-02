import { Component } from 'react';
import css from 'components/Searchbar/Searchbar.module.css';

export class SearchBar extends Component {
  state = {
    search: '',
  };
  valueChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.search.trim() === "") {
            alert('write correct name');
            return
        }
            this.props.onSubmit(this.state.search)
            this.setState({ search: '' })
        
    }
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.valueChange}
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}
 