import { useRecoilState } from "recoil";
import { counterState } from "@/stores/CounterStore";

function CounterData() {
  const [count] = useRecoilState(counterState);

  return <>{count}</>;
}

export default CounterData;
