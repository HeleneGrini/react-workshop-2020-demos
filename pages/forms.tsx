import { useState } from "react";

export default () => {
  const [input, setInput] = useState("");
  const [checked, setChecke] = useState(false);
  const [touched, setTouched] = useState(false);

  const isValidPhoneNumber = input.length >= 8;

  return (
    <div className="container pt-5">
      <h3>Forms</h3>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
        }}
      >
        <label>
          Phone number
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onBlur={() => setTouched(true)}
          />
          {touched && !isValidPhoneNumber ? <div> eerror</div> : null}
        </label>
        <button disabled={!isValidPhoneNumber}>submit</button>
      </form>
    </div>
  );
};

/**
 * 1. form elementer
 * 2. input elements - types
 * 5. Radio groups (name)
 * 6. labels (accessibity)
 * 3. controlled vs uncontrolled (state vs refs)
 * 5. fil opplastning
 * 3. submit form (button vs input type submit)
 * 6. GET / POST, TARGET, action
 * 7. submission is prevented if pattern is not matched
 * 8. custom validatons
 */

/**
 * Ekstra oppgave. Se om du kan laste opp filer til databasen
 */
