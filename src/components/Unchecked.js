import React, { useState, useEffect } from 'react';
import Badge from './Badge';

const Unchecked = ({ items, onCheckHandler }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const Button = ({ name, clicker }) => {
    return (
      <button type="button" className="btn col-12 mb-2 text-light text-left" onClick={clicker}>
        {name}
      </button>
    );
  };

  useEffect(() => {
    setIsOpen(items.length);
  }, [items]);

  return (
    <div className={`card border-secondary mb-3 ${isOpen ? 'open' : ''}`}>
      <div
        className="card-header text-light bg-dark h3 d-flex align-items-center justify-content-between"
        onClick={toggleList}
      >
        <span>
          Oklara grejer <Badge num={items.length} type="warning" />
        </span>
        <span className="oi oi-chevron-bottom"></span>
      </div>
      <div className="card-body bg-secondary pb-2 uncheckedList">
        <div className="row mb-2">
          {items && items.length ? (
            items.map((item, index) => {
              return <Button key={index} name={item} clicker={() => onCheckHandler(item)} />;
            })
          ) : (
            <p className="col-12 mb-2 text-light">Inga grejer här just nu...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Unchecked;
