import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SignaturePad from 'react-signature-pad';
import { Link, browserHistory } from 'react-router';
import GeneratePdf from './pdfGen';

class SignHere extends Component {
  submit() {
    var signature = this.refs.mySignature;
    var data = signature.toDataURL('image/png');
    if(!signature.isEmpty()) {
      var pdf = GeneratePdf(data);
      this.props.passSignature(pdf);
      browserHistory.push('/confirm');
      //GeneratePdf(data);
    }
  }

  render() {
    return (
      <div>
        <SignaturePad clearButton = "true" ref="mySignature" />
        <div className="m-signature-pad--footer">
          <button className='btn btn-primary submit-button' onClick={this.submit.bind(this)} >Submit</button>
          <Link className="btn btn-primary back-button" to="/">Back</Link>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SignHere);
