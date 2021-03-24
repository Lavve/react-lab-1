const Unchecked = ({ items, onCheckHandler }) => {
  const checkHandler = (e) => {
    onCheckHandler(e.target.getAttribute('data-name'));
  };

  const Button = ({ name, clicker }) => {
    return (
      <button type="button" className="btn col-12 text-left" data-name={name} onClick={clicker}>
        {name}
      </button>
    );
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Min lista</div>
      <div className="card-body pb-2">
        {items && items.length ? (
          items.map((item, index) => {
            return (
              <div key={index} className="row mb-2">
                <Button name={item} clicker={checkHandler} />
              </div>
            );
          })
        ) : (
          <p>Din lista är lite tom...</p>
        )}
      </div>
    </div>
  );
};

export default Unchecked;
