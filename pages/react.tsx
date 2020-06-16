import React, { useState, useEffect, useRef } from "react";
import { Items } from "../components/Items";
import { SideCart } from "../components/SideCart";
import { useItems } from "../utils/useItems";

export default () => {
  const [show, setsShow] = useState(false);
  const { items, addItem, selectedItems, totalItems } = useItems();

  return (
    <div className="container pt-5">
      <button onClick={() => setsShow(!show)}>heo</button>
      {show ? <Foo label={show} item={items} /> : null}
      <div className="d-flex">
        <Items items={items} addItem={addItem} />
        <SideCart items={selectedItems} totalItems={totalItems} />
      </div>
    </div>
  );
};

const Foo = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const func = () => console.log("click");
    if (ref.current) {
      ref.current.addEventListener("click", func);
    }
    return () => ref.current?.removeEventListener("click", func);
  }, [ref.current]);

  return (
    <div ref={ref} style={{ height: "200px" }}>
      Hei
    </div>
  );
};
