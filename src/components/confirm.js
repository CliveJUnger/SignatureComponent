import React, { Component } from 'react';
import { connect } from 'react-redux';
import PDF from 'react-pdf';
import PDFJS from 'pdfjs-dist';


class ConfirmForm extends Component {
  //Returns canvas as jpeg base64 data uri
  confirmImg(){
    var canvas = document.getElementsByTagName("canvas");
    var image = canvas[0].toDataURL("image/jpeg", 1.0);
    window.open(image);
  }

  render() {
    return(
      <div>
        <PDF file={this.props.pdf} />
        <button className="btn btn-primary" onClick={this.confirmImg}>Confirm</button>
        <a className="btn btn-primary" href={this.props.pdf} download>Download</a>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { pdf: state.data.pdf };
}

export default connect(mapStateToProps)(ConfirmForm);
