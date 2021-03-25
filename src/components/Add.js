import React, { useState, useEffect, useRef } from 'react';

const Add = ({ onInputHandler, warning }) => {
  const [article, setArticle] = useState('');
  const [showWarning, setShowWarning] = useState(warning);

  const alertTimer = useRef(null);

  const inputHandler = (e) => {
    setArticle(e.target.value);
  };

  const closeAlert = () => {
    setShowWarning(false);
    if (alertTimer.current) {
      clearTimeout(alertTimer.current);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (article.trim() !== '') {
      onInputHandler(article);
      setArticle('');
      setShowWarning(false);
      if (alertTimer.current) {
        clearTimeout(alertTimer.current);
      }
    }
  };

  useEffect(() => {
    console.log('WARNING', warning);
    setShowWarning(warning);

    alertTimer.current = setTimeout(() => {
      setShowWarning(false);
    }, 5000);
    return () => {
      clearTimeout(alertTimer.current);
    };
  }, [warning]);

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <div className="form-group row">
          <div className="col-12 col-md-3">
            <label htmlFor="article" className="col-form-label">
              Ny artikel
            </label>
          </div>
          <div className="col-10 col-md-7">
            <input
              type="text"
              id="article"
              className="form-control"
              placeholder="Lägg till ny artikel"
              value={article}
              onChange={inputHandler}
            />
          </div>
          <div className="col-2 col-md-2 text-right">
            <button type="submit" className="btn btn-primary">
              +
            </button>
          </div>
        </div>
        <div className={`row ${showWarning ? '' : 'd-none'}`}>
          <div className="col-12">
            <div className="alert alert-danger">
              Artikeln finns redan på listan.
              <button type="button" className="close" onClick={closeAlert}>
                <span>&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Add;
