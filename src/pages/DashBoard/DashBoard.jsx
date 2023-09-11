import LeftMenu from "../../components/LeftMenu/LeftMenu"; 
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightNotification from "../../components/RightNotification/RightNotification";

export const DashBoard = (prop) => {
  return (
    <div>
      <LeftMenu />
      <MiddleContent />
      <RightNotification />
    </div>
  );
};


