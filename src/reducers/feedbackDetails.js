import { POST_FEEDBACK } from '../utils/constants';

const initialState = {
  comments: []
};

const feedbackDetails = (state = initialState, action) => {
  switch (action.type) {
    case POST_FEEDBACK:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };

    default:
      return state;
  }
};
export default feedbackDetails;
