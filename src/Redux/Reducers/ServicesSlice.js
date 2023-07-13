import { createSlice } from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
  name: "services",
  initialState: {
    items: [],
  },
  reducers: {
    addNewServices: (state, action) => {
      if (action.payload) {
        state.items.push(action.payload);
      }
    },
    updateService: (state, action) => {
      if (action.payload) {
        const filteredData = [...state.items].filter(
          (d) => d.serviceName !== action.payload.serviceName
        );
        filteredData.push(action.payload);
        state.items = filteredData;
      }
    },
    deleteService: (state, action) => {
      if (action.payload) {
        const filteredData = [...state.items].filter(
          (d) => d.serviceName !== action.payload
        );
        state.items = filteredData;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewServices, updateService, deleteService } =
  servicesSlice.actions;
export default servicesSlice.reducer;
