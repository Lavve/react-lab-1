import React, { useState, useEffect } from 'react';

const Add = ({ onSave, warning, closeWarning }) => {
  const [article, setArticle] = useState('');
  const [latest, setLatest] = useState('');

  const inputHandler = (e) => {
    setArticle(e.target.value);
    setLatest(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (article.trim() !== '') {
      onSave(article.trim());
      setArticle('');
    }
  };

  useEffect(() => {
    const input = document.getElementById('article');
    if (article === '') {
      input.focus();
    }
  }, [article]);

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <div className="form-group row">
          <div className="input-group">
            <div className="col-12 col-md-3">
              <label htmlFor="article" className="col-form-label text-light form-label">
                Ny grej
              </label>
            </div>
            <div className="col-9 col-md-7 px-0">
              <input
                type="text"
                id="article"
                className="form-control border-dark"
                placeholder="Lägg till ny grej här"
                value={article}
                onChange={inputHandler}
              />
            </div>
            <div className="input-group-append col-3 col-md-2 px-0">
              <button
                type="submit"
                className={`btn btn-success action w-100 font-weight-bold ${
                  !article ? 'btn-outline-success' : ''
                }`}
                disabled={!article}
              >
                <span className="oi oi-plus"></span>
              </button>
            </div>
          </div>
          <div className={`alert alert-danger mt-1 w-100 ${warning ? '' : 'd-none'}`}>
            Meh, "{latest}" finns ju redan på listan...
            <button type="button" className="close" onClick={() => closeWarning()}>
              <span className="oi oi-circle-x"></span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Add;
