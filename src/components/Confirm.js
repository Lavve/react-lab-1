import React from 'react';
const Confirm = ({ visible, onConfirm, onCancel, value }) => {
  return (
    <div
      className={`modal fade bd-example-modal-sm ${visible ? 'show' : ''}`}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Riktigt säkert?</h5>
            <button type="button" className="close" onClick={() => onCancel()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Är du riktigt säker på att "<strong>{value}</strong>" ska väck för alltid?
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-dark" onClick={() => onCancel()}>
              Näe
            </button>
            <button type="button" className="btn btn-dark btn-primary" onClick={() => onConfirm(value)}>
              Jajemen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
