const Unchecked = ({ items, onCheckHandler }) => {
  const Button = ({ name, clicker }) => {
    return (
      <button type="button" className="btn col-12 mb-2 text-left" onClick={clicker}>
        {name}
      </button>
    );
  };

  return (
    <div className="card mb-3">
      <div className="card-header h6">Oklara grejer ({items.length})</div>
      <div className="card-body pb-2">
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
