const Checked = ({ items, onMoveHandler, onDeleteItem }) => {
  const listBlock = document.querySelector('.checkedList');
  const toggleList = (e) => {
    e.target.classList.toggle('open');
    listBlock.classList.toggle('open');
  };

  const Badge = ({ txt }) => {
    return <span className="badge badge-success">{txt}</span>;
  };

  const Button = ({ name, clicker, type }) => {
    const btnClass =
      type === 'delete'
        ? 'btn-danger action font-weight-bold rounded-circle mr-2'
        : 'col text-light text-left';
    return (
      <button type="button" className={`btn ${btnClass}`} onClick={clicker}>
        {type === 'delete' ? <span className="oi oi-trash"></span> : <del>{name}</del>}
      </button>
    );
  };

  return (
    <div className="card border-secondary shadow">
      <div className="card-header text-light bg-dark h3 d-flex justify-content-between">
        <span>Färdiga grejer {items.length ? <Badge txt={items.length} /> : null}</span>
        <button type="button" className="btn text-light open" onClick={toggleList}>
          <span className="oi oi-chevron-bottom"></span>
        </button>
      </div>
      <div className="card-body bg-secondary pb-2 checkedList open">
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
