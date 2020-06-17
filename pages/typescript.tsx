import { useState } from "react";

export default () => {
  return (
    <div className="container pt-5">
      <h3>TypeScript</h3>
      <Foo text="hei" />
    </div>
  );
};

type Props =
  | {
      label?: string;
    }
  | { text: string };

const Foo = (props: Props) => {
  const [state, setState] = useState();
  const label = "text" in props ? props.text : props.label;
  const array: Array<string> = [];

  const { value, setValue, type } = useGenericHook({
    initialValue: { KEY1: "hei", KEY2: "hallo" },
  });

  return (
    <>
      <button onClick={() => setState(1)}>number</button>
      <button onClick={() => setState("1")}>string</button>
      <button onClick={() => setState({ num: 1 })}>obj</button>
      <div>{label}</div>
    </>
  );
};

interface GenericHook<T extends { [key: string]: string }> {
  type: string;
  value: T;
  /**
   * En funksjon som tar inn et objekt av typen T og ikke returnerer noe
   */
  setValue: (values: T) => void;
  /**
   * Objekt med samme nøkler som values, men at verdiene er en bool
   */
  bool?: { [key in keyof T]: boolean };
}

function useGenericHook<T extends { [key: string]: string }>(options?: {
  initialValue: T;
}): GenericHook<T> {
  const [value, setValue] = useState<T>(options?.initialValue);

  const values = Object.values(options.initialValue);
  const keys = Object.keys(options.initialValue);
  return { type: typeof value, value, setValue };
}

/**
 * 2. primitive typer
 * 1. to måter å definere typer på
 * 1. props utypet og types
 * 2. type const
 * 3. arrya type
 * 3. state types -- generics
 * 4. unions
 * 4. lage en egen generics hook
 * 5. generic array
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
