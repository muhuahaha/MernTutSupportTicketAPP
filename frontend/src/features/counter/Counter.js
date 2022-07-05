import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  mundo,
  incrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count, "count");

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const isPrime = (number) => {
    if ((number % 2 === 0 && number !== 2) || number <= 1) {
      return false;
    }

    const limit = Math.floor(Math.sqrt(number));

    for (let index = 3; index <= limit; index += 2) {
      if (number % index === 0) {
        return false;
      }
    }

    return true;
  };

  const test = isPrime(count)
    ? `${count} ist eine Primzahl`
    : `${count} ist keine Primzahl`;

  return (
    <section>
      <div className="d-flex justify-space-around bg-slate-300 p-md">
        <p className="bg-slate-100 p-sm">{count}</p>
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>

        <button className="btn" onClick={() => dispatch(mundo())}>
          mundo
        </button>
      </div>

      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div className="d-flex justify-space-around bg-slate-300 p-md m-md">
        {" "}
        <button
          className="btn"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button className="btn" onClick={() => dispatch(resetAll())}>
          reset
        </button>
      </div>
      <div className="m-sm">{test}</div>
    </section>
  );
};

export default Counter;
