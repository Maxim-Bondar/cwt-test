import { v4 as uuidv4 } from "uuid";
import { createSlice, current } from "@reduxjs/toolkit";
import { MAX_COLUMNS, MAX_ROWS } from "../../constants/table";

const initialState = {
  tableData: [],
  sidebarDetails: {},
};

export const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    setTableData(state, action) {
      let tableArr = [];

      for (let i = 0; i < MAX_ROWS; i++) {
        let rowData = [];

        for (let j = 0; j < MAX_COLUMNS; j++) {
          const randomIndex = Math.floor(Math.random() * action.payload.length);
          rowData = [
            ...rowData,
            { ...action.payload[randomIndex], id: uuidv4() },
          ];
        }

        tableArr = [...tableArr, rowData];
      }

      state.tableData = [...tableArr];
    },
    updateCellData(state, action) {
      const { rowIndex, id } = action.payload;

      const elIndex = state.tableData[rowIndex].findIndex(
        (item) => item.id === id
      );

      const cloneTableDataArr = [...state.tableData];
      cloneTableDataArr[rowIndex][elIndex].likes =
        cloneTableDataArr[rowIndex][elIndex].likes + 1;

      state.tableData = cloneTableDataArr;
    },
    setSidebarDetails(state, action) {
      const data = {};
      const flattenData = current(state.tableData).flat();

      flattenData.forEach((item) => {
        data[item.breed] = {
          counts: (data[item.breed]?.counts || 0) + 1,
          likes: 0,
        };
      });

      state.sidebarDetails = data;
    },
    updateSidebarDetails(state, action) {
      const breed = action.payload;

      state.sidebarDetails = {
        ...state.sidebarDetails,
        [breed]: {
          ...state.sidebarDetails[breed],
          likes: state.sidebarDetails[breed]?.likes + 1,
        },
      };
    },
  },
});

export const dogsActions = dogsSlice.actions;
export const dogsReducer = dogsSlice.reducer;
