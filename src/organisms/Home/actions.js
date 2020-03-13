import { POST_FEEDBACK } from '../../utils/constants';

export const postFeedback = ({ name, email, comment }) => ({
  type: POST_FEEDBACK,
  payload: {
    name,
    email,
    comment
  }
});
