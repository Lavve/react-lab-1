const Checked = ({ items, onMoveHandler, onDeleteItem }) => {
  const Button = ({ name, clicker, type }) => {
    const btnClass =
      type === 'delete' ? 'btn-outline-danger action font-weight-bold rounded-circle mr-2' : 'col text-left';
    return (
      <button type="button" className={`btn ${btnClass}`} onClick={clicker}>
        {type === 'delete' ? <>&times;</> : <del>{name}</del>}
      </button>
    );
  };

  return (
    <div className="card border-dark">
      <div className="card-header text-white bg-dark h6">
        Färdiga grejer {items.length ? '(' + items.length + ')' : null}
      </div>
      <div className="card-body pb-2">
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
