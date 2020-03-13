import React, { useReducer } from 'react';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../atoms/Button';
import { postFeedback } from './actions';
import { isValidEmail } from '../../utils/calculationUtils';
import Input from '../../atoms/Input';
import sn from 'classnames';

import './home-page.scss';

const reducer = (state, action) => {
  const { key, value } = action;
  if (action.type === 'inputChange') {
    return {
      ...state,
      [key]: value,
      disabled:
        (key === 'email' ? !isValidEmail(value) : state.disabled) ||
        (state.comment.length <= 0) | (state.name.length <= 0)
    };
  } else if (action.type === 'clear') {
    return {
      ...state,
      name: '',
      disabled: true,
      email: '',
      comment: ''
    };
  }
};

const Home = ({ postFeedback }) => {
  const [state, dispatcher] = useReducer(reducer, {
    name: '',
    disabled: true,
    comment: ''
  });

  const { email, name, comment, disabled } = state;
  console.log('com', comment.length);
  return (
    <Container className="home">
      <div className={sn('header', {})}>
        <h3>{`hi ${name} !!`}</h3>
      </div>
      <Col>
        <Row className="justify-content-center row-50">
          <Input
            value={name}
            placeholder="Name"
            onChange={e =>
              dispatcher({
                type: 'inputChange',
                key: 'name',
                value: e.target.value
              })
            }
          />
          <Input
            value={email}
            placeholder="Email"
            onChange={e =>
              dispatcher({
                type: 'inputChange',
                key: 'email',
                value: e.target.value
              })
            }
          />
          <Input
            value={comment}
            placeholder="Commet"
            onChange={e =>
              dispatcher({
                type: 'inputChange',
                key: 'comment',
                value: e.target.value
              })
            }
          />
          <Button
            disabled={disabled}
            onClick={() => {
              dispatcher({
                type: 'clear'
              });
              return postFeedback(state);
            }}
          >
            Post Feedback
          </Button>
        </Row>
        <div className="calendar">
          <div className="transaction" />
          <div className="statement" />
          <div className="vector-3" />
          <div className="vector-4" />
        </div>
      </Col>
    </Container>
  );
};

Home.propTypes = {
  postFeedback: PropTypes.func.isRequired
};

Home.defaultProps = {};

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    postFeedback: bindActionCreators(postFeedback, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
