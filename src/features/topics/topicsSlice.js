import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id } = action.payload;
      state.topics[id] = action.payload;
    },
    addQuizIdForTopic: (state, action) => {
      console.log(action.payload);
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
