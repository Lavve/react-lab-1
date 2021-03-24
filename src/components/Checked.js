const Checked = ({ items, onMoveHandler, onDeleteItem }) => {
  console.log('Checked: items', items);

  const moveHandler = (e) => {
    onMoveHandler(e.target.getAttribute('data-name'));
  };

  const deleteItem = (e) => {
    onDeleteItem(e.target.getAttribute('data-name'));
  };

  return (
    <div className="card">
      <div className="card-header">Klart</div>
      <div className="card-body pb-2">
        {items && items.length ? (
          items.map((item, index) => {
            return (
              <div key={index} className="row mb-2">
                <div className="col-6">
                  <del>{item}</del>
                </div>
                <div className="col-3 text-right">
                  <button className="btn btn-warning" data-name={item} onClick={moveHandler}>
                    &#8593;
                  </button>
                </div>
                <div className="col-3 text-right">
                  <button className="btn btn-danger" data-name={item} onClick={deleteItem}>
                    &times;
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Här hamnar de artiklar du bockat av.</p>
        )}
      </div>
    </div>
  );
};

export default Checked;
