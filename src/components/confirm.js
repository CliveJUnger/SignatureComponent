import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';
import {texas_notary_app_uri} from '../../images/texas_notary_app_uri';
import jsPDF from '../../jsPDF/dist/jspdf.min.js';

class ConfirmForm extends Component {
  componentWillMount(){
    var doc = new jsPDF();
    var signatureURI = this.props.signature;

    doc.setFontSize(40);
    //doc.addImage(texas_notary_app_uri, 'PNG', 0,0,0,0);
    doc.text(35, 25, "TEST");
    doc.addImage(signatureURI, 'PNG', 15, 40, 180, 160);
    //doc.output('dataurlnewwindow');
    doc.save()
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
