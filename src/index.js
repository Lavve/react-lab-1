import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Add from './components/Add';
import Unchecked from './components/Unchecked';
import Checked from './components/Checked';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => {
  const jsonUnchecked = () => JSON.parse(localStorage.getItem('unchecked')) || [];
  const jsonChecked = () => JSON.parse(localStorage.getItem('checked')) || [];
  const [unchecked, setUnchecked] = useState(jsonUnchecked);
  const [checked, setChecked] = useState(jsonChecked);
  const [showError, setShowError] = useState(false);

  const moveToUnchecked = (value) => {
    const rest = checked.filter((item) => item !== value);
    setChecked(rest);
    setUnchecked([...unchecked, value]);
  };

  const onInput = (value) => {
    setShowError(false);

    if (!unchecked.includes(value) && !checked.includes(value)) {
      setUnchecked([...unchecked, value]);
    } else {
      if (checked.includes(value)) {
        moveToUnchecked(value);
      } else {
        setShowError(true);
      }
    }
  };

  const checkItem = (value) => {
    const rest = unchecked.filter((item) => item !== value);
    setUnchecked(rest);
    setChecked([...checked, value]);
  };

  const deleteItem = (value) => {
    const rest = checked.filter((item) => item !== value);
    console.log('rest', value, rest);
    setChecked(rest);
  };

  useEffect(() => {
    const unchecked = JSON.parse(localStorage.getItem('unchecked'));
    const checked = JSON.parse(localStorage.getItem('checked'));

    if (unchecked) {
      setUnchecked(unchecked);
    }
    if (checked) {
      setChecked(checked);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('unchecked', JSON.stringify(unchecked));
    window.localStorage.setItem('checked', JSON.stringify(checked));
  }, [unchecked, checked]);

  return (
    <div className="container my-3">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-8">
          <header>
            <h1 className="text-center">Shopping</h1>
          </header>
          <Add onInputHandler={onInput} warning={showError} />
          <hr />
          <Unchecked items={unchecked} onCheckHandler={checkItem} />
          <Checked items={checked} onMoveHandler={moveToUnchecked} onDeleteItem={deleteItem} />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
