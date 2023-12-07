import UpgradeCard from "./UpgradeCard";

const RightColumn = () => {
  return (
    <div className="col-md-6 d-sm-flex justify-content-sm-center right-col" >
      <UpgradeCard />
      <UpgradeCard />
      <UpgradeCard />
      <UpgradeCard />
    </div>
  );
}
export default RightColumn;