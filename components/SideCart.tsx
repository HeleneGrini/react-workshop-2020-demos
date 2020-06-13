type Item = {
  id: string;
  label: string;
  amount: number;
};

export const SideCart = (props: { items: Array<Item> }) => {
  // implement a total count
  return (
    <div className="card ml-auto w-25">
      <h3 className="card-header">Handlekurv</h3>
      <ul className="list-group list-group-flush flex-fill">
        {props.items?.map((item) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {item.label}
            <span className="badge badge-primary badge-pill">
              {item.amount}
            </span>
          </li>
        ))}
      </ul>
      <div className="card-body d-flex justify-content-between align-items-center flex-grow-0 ">
        Total:
        <span className="badge badge-warning badge-pill">?</span>
      </div>
    </div>
  );
};
