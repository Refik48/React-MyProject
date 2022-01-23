import "./clock1.css";
import moment from "moment";
const Clock1 = () => {
  return (
    <div className="clock-container">
      <div className="clock"></div>
      <div >
       <div className="date"></div>
       <div className="day"></div>
      </div>
    </div>
  );
};
export default Clock1;
