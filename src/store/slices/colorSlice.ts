import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import colors from '../../theme/colors';
interface ColorState {
  currentColor: string;
}
const initialState: ColorState = {
  currentColor: colors.white,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setCurrentColor: (state, action: PayloadAction<string>) => {
      state.currentColor = action.payload;
    },
  },
});

export const { setCurrentColor } = colorSlice.actions;
export default colorSlice.reducer;
