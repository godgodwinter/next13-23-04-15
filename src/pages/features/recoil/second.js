import SecondPagesRecoilComponent from "@/components/recoil/SecondPagesRecoilComponent";
import RecoilLayout from "./RecoilLayout";
function recoil() {
  return (
    <RecoilLayout>
      <div>
        <div>
          <SecondPagesRecoilComponent />
        </div>
        this is 2nd pages
      </div>
    </RecoilLayout>
  );
}

export default recoil;
