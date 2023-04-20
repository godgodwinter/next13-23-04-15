import CounterData from "@/components/recoil/CounterData";
import RecoilLayout from "./RecoilLayout";
function recoil() {
  return (
    <RecoilLayout>
      <div>
        <div>
          this is recoil Other pages: <CounterData />
        </div>
      </div>
    </RecoilLayout>
  );
}

export default recoil;
