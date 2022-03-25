import DetailsCard from "./Data/DetailsCard";
import OnBoardCard from "./Data/OnBoardCard";
import StatsCard from "./Data/StatsCard";
import  './Container.css';

const DataContainer = () => {
  return (
    <div className="dataContainer">
        <DetailsCard />
        <StatsCard />
        <OnBoardCard />
    </div>
  )
}

export default DataContainer