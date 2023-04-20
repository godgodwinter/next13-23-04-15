import { useRecoilState } from "recoil";
import { counterState } from "@/stores/CounterStore";

function SecondPagesRecoilComponent() {
  const [count, setCount] = useRecoilState(counterState);

  function handleClick() {
    setCount(count + 1);
  }

  return <div>Second Pages: {count}</div>;
}

export default SecondPagesRecoilComponent;
