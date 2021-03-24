const Checked = ({ items, onMoveHandler, onDeleteItem }) => {
  const moveHandler = (e) => {
    onMoveHandler(e.target.getAttribute('data-name'));
  };

  const deleteItem = (e) => {
    onDeleteItem(e.target.getAttribute('data-name'));
  };

  const Button = ({ name, clicker, type }) => {
    const btnClass = type === 'delete' ? 'btn-danger col-2' : 'col-10 text-left';
    return (
      <button type="button" className={`btn ${btnClass}`} data-name={name} onClick={clicker}>
        {type === 'delete' ? <>&times;</> : <del>{name}</del>}
      </button>
    );
  };

  return (
    <div className="card">
      <div className="card-header">Klart</div>
      <div className="card-body pb-2">
        {items && items.length ? (
          items.map((item, index) => {
            return (
              <div key={index} className="row mb-2">
                <Button name={item} clicker={moveHandler} type="move" />
                <Button name={item} clicker={deleteItem} type="delete" />
              </div>
            );
          })
        ) : (
          <p>Här hamnar de artiklar du klickat på i listan ovan.</p>
        )}
      </div>
    </div>
  );
};

export default Checked;
