const Unchecked = ({ items, onCheckHandler }) => {
  const listBlock = document.querySelector('.uncheckedList');
  const toggleList = (e) => {
    e.target.classList.toggle('open');
    listBlock.classList.toggle('open');
  };

  const Badge = ({ txt }) => {
    return <span className="badge badge-warning">{txt}</span>;
  };

  const Button = ({ name, clicker }) => {
    return (
      <button type="button" className="btn col-12 mb-2 text-left" onClick={clicker}>
        {name}
      </button>
    );
  };

  return (
    <div className="card mb-3 shadow">
      <div className="card-header text-white bg-dark h3 d-flex justify-content-between">
        <span>Oklara grejer {items.length ? <Badge txt={items.length} /> : null}</span>
        <button type="button" className="btn text-light open" onClick={toggleList}>
          <span className="oi oi-chevron-bottom"></span>
        </button>
      </div>
      <div className="card-body pb-2 uncheckedList open">
        <div className="row mb-2">
          {items && items.length ? (
            items.map((item, index) => {
              return <Button key={index} name={item} clicker={() => onCheckHandler(item)} />;
            })
          ) : (
            <p className="col-12 mb-0">Inga grejer här just nu...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Unchecked;
