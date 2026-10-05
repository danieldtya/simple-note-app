import React from 'react';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKeyword: '',
    };

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    this.onClearEventHandler = this.onClearEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    const keyword = event.target.value;

    this.setState({ searchKeyword: keyword });
    this.props.onSearch(keyword);
  }

  onClearEventHandler() {
    this.setState({ searchKeyword: '' });
    this.props.onSearch('');
  }

  render() {
    const { searchKeyword } = this.state;

    return (
      <div className="note-search" data-testid="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          aria-label="Cari catatan berdasarkan judul"
          value={searchKeyword}
          onChange={this.onSearchChangeEventHandler}
          data-testid="note-search-input"
        />
        {searchKeyword && (
          <button
            className="note-search__clear"
            type="button"
            aria-label="Hapus kata kunci pencarian"
            onClick={this.onClearEventHandler}
            data-testid="note-search-clear-button"
          >
            &times;
          </button>
        )}
      </div>
    );
  }
}

export default NoteSearch;
