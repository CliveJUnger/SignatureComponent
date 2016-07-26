import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';
import GeneratePdf from './pdfGen';


class ConfirmForm extends Component {
  componentWillMount(){
    GeneratePdf(this.props.signature);
  }

  render() {
    return(
      <div>
      Yo
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { signature: state.data.signature };
}

export default connect(mapStateToProps)(ConfirmForm);
