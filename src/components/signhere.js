import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SignaturePad from 'react-signature-pad';
import { Link, browserHistory } from 'react-router';
import GeneratePdf from './pdfGen';
import {dumby_data} from '../dumby_data';

class SignHere extends Component {
  submit() {
    var signature = this.refs.mySignature;
    var data = signature.toDataURL('image/png');

    if(!signature.isEmpty()) {
      // Generate pdf return pdf uri (first arg: signature uri, second arg: user data object)
      var pdf = GeneratePdf(data, dumby_data);
      this.props.passPdf(pdf);// Pass pdf URI string to state
      browserHistory.push('/confirm');
    }
  }

  render() {
    return (
      <div>
        <SignaturePad clearButton="true" ref="mySignature" />
        <div className="m-signature-pad--footer">
          <button className='btn btn-primary submit-button' onClick={this.submit.bind(this)} >Submit</button>
          <Link className="btn btn-primary back-button" to="/">Back</Link>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SignHere);
