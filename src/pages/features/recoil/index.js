import TestRecoilShared from "@/components/recoil/TestRecoilShared";
import RecoilLayout from "./RecoilLayout";
function recoil() {
  return (
    <RecoilLayout>
      <div>
        <div>
          <TestRecoilShared />
        </div>
        this is recoil pages
      </div>
    </RecoilLayout>
  );
}

export default recoil;
