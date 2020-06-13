export const Items = (props) => {
  return (
    <div className="w-75">
      <div className="d-flex flex-wrap">
        {props.items?.map((item) => (
          <div className="card m-2 w-25">
            <div className="card-body">
              <h6 className="card-subtitle mb-2">{item.label}</h6>
              <button
                type="button"
                className="btn btn-warning btn-sm"
                onClick={() => props.addItem(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
