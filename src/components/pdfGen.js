//import {texas_notary_app_uri} from '../../images/texas_notary_app_uri';
import {top_uri} from '../../images/top_uri';
import {bot_uri} from '../../images/bot_uri';
import jsPDF from '../../jsPDF/dist/jspdf.min.js';

export default function (signatureURI) {
  var doc = new jsPDF("p","in", [8.5,11]);

  doc.setFontSize(12);
  doc.addImage(top_uri, 'PNG', 0,0, 8.5, 5.5);
  doc.addImage(bot_uri, 'PNG', 0,5.5, 8.5, 5.5);


  doc.text(1, 1, "TEST");
  //doc.addImage(signatureURI, 'PNG', 15, 40, 180, 160);
  //doc.output('dataurlnewwindow');
  //doc.save()
  var blob = doc.output("blob");
  window.open(URL.createObjectURL(blob));
}
