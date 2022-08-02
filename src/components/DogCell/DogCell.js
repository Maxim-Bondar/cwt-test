import { useActions } from "../../hooks/actions";
import "./DogCell.scss";

const DogCell = ({ id, breed, likes, imageUrl, onClick }) => {
  const { updateSidebarDetails } = useActions();

  const handleClick = () => {
    updateSidebarDetails(breed);

    onClick(id);
  };

  return (
    <td className="cell">
      <button onClick={handleClick} type="button">
        <span className="img-wrapper">
          <img src={imageUrl} alt="dog" />
        </span>
        <span className="info-wrapper">
          <span className="info">
            <u>Breed:</u> <strong>{breed}</strong>
          </span>
          <span className="info">
            <u>Likes:</u> <strong>{likes}</strong>
          </span>
        </span>
      </button>
    </td>
  );
};

export default DogCell;
