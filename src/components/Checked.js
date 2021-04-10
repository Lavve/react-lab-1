import React, { useState, useEffect } from 'react';
import Badge from './Badge';

const Checked = ({ items, onMoveHandler, onDeleteItem }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const Button = ({ name, clicker, type }) => {
    const btnClass =
      type === 'delete'
        ? 'btn btn-danger action font-weight-bold rounded-circle mr-2'
        : 'btn col text-light text-left';
    return (
      <button type="button" className={`${btnClass}`} onClick={clicker}>
        {type === 'delete' ? <span className="oi oi-trash"></span> : <del>{name}</del>}
      </button>
    );
  };

  useEffect(() => {
    setIsOpen(items.length);
  }, [items]);

  return (
    <div className={`card border-secondary ${isOpen ? 'open' : ''}`}>
      <div
        className="card-header text-light bg-dark h3 d-flex align-items-center justify-content-between"
        onClick={toggleList}
      >
        <span>
          Färdiga grejer <Badge num={items.length} type="success" />
        </span>
        <span className="oi oi-chevron-bottom"></span>
      </div>
      <div className="card-body bg-secondary pb-2 checkedList">
        {items && items.length ? (
          items.map((item, index) => {
            return (
              <div key={index} className="row mb-2">
                <Button name={item} clicker={() => onMoveHandler(item)} type="move" />
                <Button name={item} clicker={() => onDeleteItem(item)} type="delete" />
              </div>
            );
          })
        ) : (
          <p className="mb-2">Här hamnar de grejer du klickat på i listan ovan.</p>
        )}
      </div>
    </div>
  );
};

export default Checked;
