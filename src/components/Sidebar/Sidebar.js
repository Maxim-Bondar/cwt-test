import { useSelector } from "react-redux";
import "./Sidebar.scss";

const Sidebar = () => {
  // Just for practice, better solution here pass it throw the props
  const { sidebarDetails } = useSelector((state) => state.dogs);

  return (
    <div className="details-wrapper">
      <aside className="details">
        <ul className="list">
          {Object.keys(sidebarDetails).map((item, index) => (
            <li className="details-row" key={`${item}-${index}`}>
              <p>Breed: {item}</p>
              <p>Count: {sidebarDetails[item].counts}</p>
              <p>Likes: {sidebarDetails[item].likes}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
