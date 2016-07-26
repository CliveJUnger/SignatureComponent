import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';
import GeneratePdf from './pdfGen';
import PDF from 'react-pdf';
import PDFJS from 'pdfjs-dist';


class ConfirmForm extends Component {
  componentWillMount(){
    //GeneratePdf(this.props.signature);
    console.log(this.props.signature);
  }

  render() {
    return(
      <div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { signature: state.data.signature };
}

export default connect(mapStateToProps)(ConfirmForm);

//Async SOAP calls
