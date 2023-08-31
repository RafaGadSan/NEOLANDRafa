import { useMemo, useState } from "react";

import "./App.css";

const mapScores = (scores, caller) => {
  console.log("Invocamos mapScores =>", caller);

  return scores.map((num, index) => {
    const calc = (num * 3) / 2;
    const color = calc < 3 ? "🔴" : "🟢";

    return (
      <p key={index}>
        {calc} {color}
      </p>
    );
  });
};
function App() {
  const [reload, setReload] = useState(false);

  const memoInfo = useMemo(() => {
    return mapScores([1, 23, 2, 4, 11], "memorizado 💚");
  }, []);

  const noMemo = mapScores([1, 23, 2, 4, 11], "no momorizado❌");

  return (
    <>
      <div className="rows">
        <div>
          <h3>Memorizado</h3>
          {memoInfo}
        </div>
        <div>
          <h3>No Memorizado</h3>
          {noMemo}
        </div>

        <button onClick={() => setReload((value) => !value)}>RELOAD</button>
      </div>
    </>
  );
}

export default App;
