import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

export interface ResumeState {
  profile: { name: string; headline: string; };
  skills: string[];
  summary: string;
  experience: string[];
}

const initialState: ResumeState = {
  profile: { name: "", headline: "" },
  skills: [],
  summary: "",
  experience: []
};

const slice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) { state.profile.name = action.payload; },
    setHeadline(state, action: PayloadAction<string>) { state.profile.headline = action.payload; },
    setSkills(state, action: PayloadAction<string[]>) { state.skills = action.payload; },
    setSummary(state, action: PayloadAction<string>) { state.summary = action.payload; },
    setExperience(state, action: PayloadAction<string[]>) { state.experience = action.payload; }
  }
});

export const { setName, setHeadline, setSkills, setSummary, setExperience } = slice.actions;
const store = configureStore({ reducer: { resume: slice.reducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
