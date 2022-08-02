import { useSelector } from "react-redux";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import DogsTable from "./components/DogsTable/DogsTable";
import {
  useLazyGetBreedsQuery,
  useLazyGetDogImageQuery,
} from "./store/dogs/dogs.api";
import { useEffect, useState } from "react";
import { useActions } from "./hooks/actions";

function App() {
  const [getBreeds] = useLazyGetBreedsQuery();
  const [getImage] = useLazyGetDogImageQuery();

  const { setSidebarDetails, setTableData } = useActions();

  const { tableData } = useSelector((state) => state.dogs);

  const [isLoading, setLoading] = useState(false);

  const runAsyncFunctions = async () => {
    setLoading(true);
    const { data: breeds } = await getBreeds();

    const mappedDogsData = await Promise.all(
      breeds.map(async (breed) => {
        const imageUrl = await getImage(breed.breed);

        return {
          breed: breed.breed,
          imageUrl: imageUrl.data.message,
          likes: 0,
        };
      })
    );

    setTableData(mappedDogsData);
    setSidebarDetails();
    setLoading(false);
  };

  useEffect(() => {
    runAsyncFunctions();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">Data is loading ...</div>
      ) : (
        <>
          <Sidebar />
          <DogsTable tableData={tableData} />
        </>
      )}
    </div>
  );
}

export default App;
