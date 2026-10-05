import React from 'react';

const TITLE_MAX_LENGTH = 50;
const TITLE_WARN_THRESHOLD = 10;
const BODY_MIN_LENGTH = 10;

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // TODO [Basic] kelola nilai title sebagai controlled input.
      title: '',
      // TODO [Basic] kelola nilai body sebagai controlled textarea.
      body: '',
      hasTriedSubmit: false,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    // TODO [Basic] update state dengan nilai event.target.value.
    // TODO [Skilled] batasi judul maksimal 50 karakter dan tampilkan peringatan saat sisa karakter < 10.
    this.setState({
      title: event.target.value.slice(0, TITLE_MAX_LENGTH),
    });
  }

  onBodyChangeEventHandler(event) {
    // TODO [Basic] update state body agar textarea menjadi controlled component.
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    // TODO [Basic] panggil props.addNote dengan data title & body dari state, lalu reset form.
    // TODO [Advanced] tolak submit ketika body kurang dari 10 karakter dan tampilkan pesan error.
    const { title, body } = this.state;

    if (body.length < BODY_MIN_LENGTH) {
      this.setState({ hasTriedSubmit: true });
      return;
    }

    this.props.addNote({ title, body });
    this.setState({
      title: '',
      body: '',
      hasTriedSubmit: false,
    });
  }

  render() {
    const { title, body, hasTriedSubmit } = this.state;

    // TODO [Skilled] hitung sisa karakter jika menerapkan limit 50 karakter.
    const remainingChars = TITLE_MAX_LENGTH - title.length;
    const isNearLimit = remainingChars < TITLE_WARN_THRESHOLD;
    const isBodyTooShort = body.length < BODY_MIN_LENGTH;
    const showBodyError = isBodyTooShort && (body.length > 0 || hasTriedSubmit);

    return (
      <div className="note-input" data-testid="note-input">
        <h2>Buat catatan</h2>

        {/* // TODO [Advanced] tampilkan pesan error menggunakan elemen dengan class note-input__feedback--error. */}
        {showBodyError && (
          <p className="note-input__feedback note-input__feedback--error" role="alert">
            Isi catatan minimal harus {BODY_MIN_LENGTH} karakter
          </p>
        )}

        <form
          onSubmit={this.onSubmitEventHandler}
          data-testid="note-input-form"
        >
          {/* TODO [Skilled] tampilkan sisa karakter secara dinamis ketika limit judul diterapkan */}
          <p
            className={`note-input__title__char-limit${isNearLimit ? ' note-input__title__char-limit--warn' : ''}`}
            data-testid="note-input-title-remaining"
          >
            Sisa karakter: {remainingChars}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={title}
            onChange={this.onTitleChangeEventHandler}
            required
            data-testid="note-input-title-field"
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            value={body}
            onChange={this.onBodyChangeEventHandler}
            required
            data-testid="note-input-body-field"
          />
          <button type="submit" data-testid="note-input-submit-button">
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
