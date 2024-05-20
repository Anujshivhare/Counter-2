import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [saved, setSaved] = useState([]);

  function handleSave() {
    setSaved([...saved, value]);
  }

  return (
    <>
      <main className="content-wrapper">
        <div className="number-counter">
          <h1 className="heading">Number Counter</h1>
          <button className="btn btn-reset" onClick={() => setValue(0)}>
            Reset
          </button>
          <div className="counter-container">
            <p className="counter" id="counter">
              {value}
            </p>
            <button
              className="btn-operator increase"
              onClick={() => setValue(value + 1)}
            >
              <i className="fas fa-plus"></i>
            </button>
            <button
              className="btn-operator decrease"
              onClick={() => setValue(value - 1)}
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
          <button className="btn btn-save" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="number-saved">
          <h2 className="heading">Numbers Saved</h2>
          {saved.length > 0 ? (
            <div class="number">
              {saved.map((number) => (
                <div className="num">{number}</div>
              ))}
            </div>
          ) : (
            <p className="no-saved">No Saved</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
