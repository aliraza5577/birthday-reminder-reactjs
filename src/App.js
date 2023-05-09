import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
	const [people, setPeople] = useState(data);
	// this should clear all records
	function clearAllRecords() {
        setPeople([]);
    }
  return (
    <main>
      <section className="container">
        {/* Create a h3 element below*/}
        <h3>{data.length} birthdays today</h3>
		<List people={people} />
		<button onClick={clearAllRecords}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
