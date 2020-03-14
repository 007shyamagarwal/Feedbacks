import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import './comments.scss';

const Comments = ({ latestComments }) => {
  return (
    <Container className="message-container">
      {latestComments.map(message => (
        <Row style={{ margin: '0' }} key={message.message}>
          <strong>{`${message.name}`}</strong> : {`${message.comment}`}
        </Row>
      ))}
      <br />
    </Container>
  );
};

Comments.propTypes = {
  latestComments: PropTypes.shape([]).isRequired
};

Comments.defaultProps = {};

const mapStateToProps = ({ feedbackDetails }) => {
  return {
    latestComments: feedbackDetails.comments
  };
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
