import {texas_notary_app_uri} from '../../images/texas_notary_app_uri';
import jsPDF from '../../jsPDF/dist/jspdf.min.js';

export default function (signatureURI) {
  var doc = new jsPDF();

  doc.setFontSize(40);
  doc.addImage(texas_notary_app_uri, 'PNG', 0,0, 215.9, 279.4);
  doc.text(35, 25, "TEST");
  doc.addImage(signatureURI, 'PNG', 15, 40, 180, 160);
  //doc.output('dataurlnewwindow');
  //doc.save()
  var blob = doc.output("blob");
  window.open(URL.createObjectURL(blob));
}
