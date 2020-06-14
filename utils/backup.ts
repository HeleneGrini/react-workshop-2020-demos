/**
 * 1. Lage komponenter - JSX vs Vanilla. Forklare children godt. Vis med props
 * 2. Data flyt - sende props ned. Oppdatere
 * 3. State (sende state ned, endre state og reflektere endringen hos parent)
 * 4. Hooks -  delbare biter med funksjonalitet, en react component som ikke har ui. Må prefikses use.
 * 5. useEffect - ofte vil vi håndtere side effekter.
 * 6. eventListeners
 */

// https://reactjs.org/docs/hooks-reference.html

/** ----------------------------------------- */

// Vanilla
// const Foo = (props) => React.createElement("div", props, props.children);
// const Bar = (props) => React.createElement(Foo, props, <div>child</div>);

// class Foo extends React.Component {
//   render() {
//     return <div>{this.props.children}</div>;
//   }
// }

//  JSX
// const Foo = (props) => <div>{props.children}</div>;
// const Bar = (props) => (
//   <Foo>
//     <div>child</div>
//   </Foo>
// );

/** ----------------------------------------- */

// <div className="d-flex">
// <Items items={items} addItem={addItem} />
// <SideCart items={selectedItems} />
// </div>

/** ----------------------------------------- */

//   const total = props.items.reduce(
//     (acc, currentItem) => acc + currentItem.amount,
//     0
//   );

/** ----------------------------------------- */

// import { useEffect } from "react";
// import { useState } from "react";

// export const useItems = () => {
// const [items, setItems] = useState([]);
// const [loading, setLoading] = useState();
// const [error, setError] = useState();
// const [selectedItems, setSelectedItems] = useState([]);
// const fetchItems = async () => {
//   setLoading(true);
//   await fetch("api/items")
//     .then((r) => r.json().then((data) => setItems(data)))
//     .catch((err) => setError(true));
//   setLoading(false);
// };

// useEffect(() => {
//   fetchItems();
// }, []);
// const addItem = (newItem) => {
//   const isSelected = selectedItems.find((item) => item.id === newItem.id);
//   if (!!isSelected) {
//     const newSelectedItems = selectedItems.map((item) => {
//       if (newItem.id === item.id) {
//         return { ...item, amount: item.amount + 1 };
//       }
//       return item;
//     });
//     setSelectedItems(newSelectedItems);
//   } else {
//     setSelectedItems([...selectedItems, { ...newItem, amount: 1 }]);
//   }
// };
//   return { items, selectedItems, addItem };
// };
/** ----------------------------------------- */

// export const useFetch = (path) => {
// const [data, setData] = useState([]);
// const [loading, setLoading] = useState();
// const [error, setError] = useState();
// const fetchItems = async () => {
//   setLoading(true);
//   await fetch(path)
//     .then((r) => r.json().then((data) => setItems(data)))
//     .catch((err) => setError(true));
//   setLoading(false);
// };
//   useEffect(() => {
//     fetchFata();
//   }, []);
// return {data, loading, error}
//}

// TYPESCRIPT
/** ----------------------------------------- */

// interface GenericHook<T extends { [key: string]: string }> {
//     type: string;
//     value: T;
//     /**
//      * En funksjon som tar inn et objekt av typen T og ikke returnerer noe
//      */
//     setValue: (values: T) => void;
//     /**
//      * Objekt med samme nøkler som values, men at verdiene er en bool
//      */
//     bool?: { [key in keyof T]: boolean };
//   }

//   enum Keys {
//     key1 = "key1",
//     key2 = "key2",
//   }
//   function useGenericHook<T extends { [key: string]: string }>(options?: {
//     initialValue: T;
//   }): GenericHook<T> {
//     const [value, setValue] = useState<T>(options?.initialValue);
//     const values = Object.values(options.initialValue);
//     const keys = Object.keys(options.initialValue);
//     return { type: typeof value, value, setValue };
//   }

// FORMS
/** ----------------------------------------- */

// <label>Do you like peas?
//   <input type="checkbox" name="peas">
// </label>

// <label for="username">Click me</label>
// <input type="text" id="username"></input>

// <form
// onSubmit={(e) => {
//   e.preventDefault();
//   console.log("subtmi");
// }}
// >
// <input
//   // ref={inputRef}
//   type="text"
//   name="hello"
//   pattern="Hello world" // any regex
//   onChange={(e) => {
//     // console.log(inputRef.current?.value);

//     if (e.target.validity.patternMismatch) {
//       console.log("pattern mismatch ");
//     }
//     if (e.target.checkValidity()) {
//       console.log("checkValidity");
//     } else {
//       console.log("not valid");
//     }
//   }}
// />
// <input type="submit" />
// </form>
