import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';
import GeneratePdf from './pdfGen';
import PDF from 'react-pdf';
import PDFJS from 'pdfjs-dist';
import CanvasToImage from 'canvas-to-image-node';


class ConfirmForm extends Component {
  componentDidMount(){
    var canvas = document.getElementsByTagName("canvas");
    //var canvas = document.getElementById("pdfCanvas");
    console.log(canvas);
    CanvasToImage.saveAsJPEG(canvas);
  }

  render() {
    return(
      <div>
        <PDF file={this.props.signature} />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { signature: state.data.signature };
}

export default connect(mapStateToProps)(ConfirmForm);

//Async SOAP calls
