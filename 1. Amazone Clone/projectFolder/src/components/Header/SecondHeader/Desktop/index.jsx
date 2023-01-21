import { HiMenu } from "react-icons/hi";

const index = () => {
  return (
    <ul className="desktop-menu">
      <li className="all-button">
        <div>
          <HiMenu size={20} />
        </div>
        <div className="font-bold">All</div>
      </li>
      <li className="items">Today's Deals</li>
      <li className="items">Custumer Service</li>
      <li className="items">Registery</li>
      <li className="items">Gift Cards</li>
      <li className="items">Sell</li>
    </ul>
  );
};

export default index;
