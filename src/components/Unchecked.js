const Unchecked = ({ items, onCheckHandler }) => {
  console.log('Unchecked: items', items);

  const checkHandler = (e) => {
    onCheckHandler(e.target.getAttribute('data-name'));
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Min lista</div>
      <div className="card-body pb-2">
        {items && items.length ? (
          items.map((item, index) => {
            return (
              <div key={index} className="row mb-2">
                <div className="col-9">{item}</div>
                <div className="col-3 text-right">
                  <button className="btn btn-success" data-name={item} onClick={checkHandler}>
                    &#x2713;
                  </button>
                </div>
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
