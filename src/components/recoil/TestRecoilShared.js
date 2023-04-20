import { useRecoilState } from "recoil";
import { counterState } from "@/stores/CounterStore";

function TestRecoilShared() {
  const [count, setCount] = useRecoilState(counterState);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className="btn btn-sm btn-info" onClick={handleClick}>
      Button Two: {count}
    </button>
  );
}

export default TestRecoilShared;
