import LeftColumn from "./components/LeftColumn";
import MiddleColumn from "./components/MiddleColumn";
import RightColumn from "./components/RightColumn";

const Main = () => {
  return (
    <div className="row">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </div>
  )
}
export default Main;