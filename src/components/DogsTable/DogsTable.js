import { useActions } from "../../hooks/actions";
import "./DogsTable.scss";
import DogCell from "../DogCell/DogCell";

const DogsTable = ({ tableData }) => {
  const { updateCellData } = useActions();

  const handleClick = ({ id, rowIndex }) => {
    updateCellData({ id, rowIndex });
  };

  return (
    <div className="table-wrapper">
      <table className="dogs-table">
        <tbody>
          {tableData.map((dog, rowIndex) => (
            <tr key={rowIndex}>
              {dog.map(({ breed, imageUrl, likes, id }) => (
                <DogCell
                  key={id}
                  id={id}
                  breed={breed}
                  imageUrl={imageUrl}
                  likes={likes}
                  onClick={(id) => handleClick({ id, rowIndex })}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DogsTable;
