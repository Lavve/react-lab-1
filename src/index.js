import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Add from './components/Add';
import Unchecked from './components/Unchecked';
import Checked from './components/Checked';
import Confirm from './components/Confirm';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/open-iconic/font/css/open-iconic-bootstrap.css';
import './index.css';

const App = () => {
  const jsonUnchecked = () => JSON.parse(localStorage.getItem('unchecked')) || [];
  const jsonChecked = () => JSON.parse(localStorage.getItem('checked')) || [];
  const [unchecked, setUnchecked] = useState(jsonUnchecked);
  const [checked, setChecked] = useState(jsonChecked);
  const [showError, setShowError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [latestValue, setLatestValue] = useState('');

  const warningTimer = useRef(null);

  const onSave = (value) => {
    if (!unchecked.includes(value) && !checked.includes(value)) {
      setShowError(false);
      setUnchecked([...unchecked, value]);
    } else {
      if (checked.includes(value)) {
        setShowError(false);
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
    setModalVisible(false);
    setChecked(rest);
  };

  const onConfirm = (value) => {
    deleteItem(value);
  };

  const confirmDelete = (value) => {
    setLatestValue(value);
    document.body.classList.add('modal-open');
    setModalVisible(true);
  };

  const onCancel = () => {
    setLatestValue('');
    document.body.classList.remove('modal-open');
    setModalVisible(false);
  };

  const moveToUnchecked = (value) => {
    const rest = checked.filter((item) => item !== value);
    setChecked(rest);
    setUnchecked([...unchecked, value]);
  };

  const closeWarning = () => {
    setShowError(false);
    if (warningTimer.current) {
      clearTimeout(warningTimer.current);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', () => onCancel(), false);

    return document.removeEventListener('keydown', () => onCancel(), false);
  }, []);

  useEffect(() => {
    setUnchecked(unchecked);
    setChecked(checked);
    window.localStorage.setItem('unchecked', JSON.stringify(unchecked));
    window.localStorage.setItem('checked', JSON.stringify(checked));
  }, [unchecked, checked]);

  useEffect(() => {
    if (showError) {
      warningTimer.current = setTimeout(() => {
        setShowError(false);
      }, 5000);
      return () => {
        clearTimeout(warningTimer.current);
      };
    }
  }, [showError]);

  return (
    <>
      <div className="container my-3 pt-5">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-8">
            <Header />
            <Add onSave={onSave} warning={showError} closeWarning={closeWarning} />
            <Unchecked items={unchecked} onCheckHandler={checkItem} />
            <Checked items={checked} onMoveHandler={moveToUnchecked} onDeleteItem={confirmDelete} />
            <Confirm visible={modalVisible} onConfirm={onConfirm} onCancel={onCancel} value={latestValue} />
          </div>
        </div>
      </div>
      <div className="modal-backdrop" style={{ display: modalVisible ? 'block' : 'none' }}></div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
