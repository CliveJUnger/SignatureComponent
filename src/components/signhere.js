import React, { Component } from 'react';
import SignaturePad from 'react-signature-pad';
import { Link } from 'react-router';

class SignHere extends Component {
  submit() {
    var signature = this.refs.mySignature;
    var data = signature.toDataURL('image/png');
    if(!signature.isEmpty()) {
      window.open(data);
      console.log(data);
    }
  }

  render() {
    return (
      <div>
        <SignaturePad clearButton = "true" ref="mySignature" />
        <div className="m-signature-pad--footer">
          <button onClick={this.submit.bind(this)} className="btn btn-primary submit-button">Submit</button>
          <Link className="btn btn-primary back-button" to="/">Back</Link>
        </div>
      </div>
    );
  }
}

export default SignHere;
