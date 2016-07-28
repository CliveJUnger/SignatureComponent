import {top_uri} from '../../images/top_uri';
import {bot_uri} from '../../images/bot_uri';
import jsPDF from '../../jsPDF/dist/jspdf.min.js';
//import jsPDF from 'jspdf';

export default function (signatureURI, dumby_data) {
  //init pdf object as portrait 8.5x11 document with coordinate grid in inches
  var doc = new jsPDF("p","in", [8.5,11]);

  //Get today's date
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  today = month+'/'+day+'/'+year;

  //Create base form
  doc.addImage(top_uri, 'PNG', 0,0, 8.5, 5.5);
  doc.addImage(bot_uri, 'PNG', 0,5.5, 8.5, 5.5);

  //Insert user data
  doc.setFontSize(12);
  doc.text(.543, 2.740, dumby_data.last_name);
  doc.text(2.8, 2.740, dumby_data.first_name);
  doc.text(4.5, 2.740, dumby_data.middle_name);
  doc.text(5.7, 2.740, dumby_data.suffix);
  doc.text(2.8, 2.740, dumby_data.first_name);
  doc.text(6.35, 2.740, dumby_data.ss);
  doc.text(.543, 3.29, dumby_data.address.street);
  doc.text(3.4, 3.29, dumby_data.address.city);
  doc.text(5.38, 3.29, dumby_data.address.zip);
  doc.text(6.37, 3.29, dumby_data.address.county);
  doc.text(3.6, 3.67, dumby_data.email);
  doc.text(4.13, 4.15, dumby_data.alt_email);
  doc.text(1.5, 4.47, dumby_data.dob);
  doc.text(5.07, 4.47, dumby_data.dl.number);
  doc.text(7.365, 4.47, dumby_data.dl.issue_state);
  doc.text(6.5, 7.67, dumby_data.bond_number);
  doc.text(1.01, 10.2, today);
  doc.text(1.01, 8.2, today);

  doc.setFontSize(20);
  if (dumby_data.felony) {
    doc.text(.54,5.59, "X");
  } else {
    doc.text(.54,6.27, "X");
  }

  if (dumby_data.renew) {
    doc.text(2.05,1.6, "X");
  }

  //Add Signature
  doc.addImage(signatureURI, 'PNG', 4.55, 9.81,3.4,0.4);

  //Open pdf in new window
  var blob = doc.output("blob");
  return URL.createObjectURL(blob);
}
