import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnatomyState {
  selectedOrgan: string | null;
  highlightedParts: string[];
}

const initialState: AnatomyState = {
  selectedOrgan: null,
  highlightedParts: [],
};

const anatomySlice = createSlice({
  name: 'anatomy',
  initialState,
  reducers: {
    setSelectedOrgan: (state, action: PayloadAction<string | null>) => {
      state.selectedOrgan = action.payload;
    },
    setHighlightedParts: (state, action: PayloadAction<string[]>) => {
      state.highlightedParts = action.payload;
    },
  },
});

export const { setSelectedOrgan, setHighlightedParts } = anatomySlice.actions;
export default anatomySlice.reducer;