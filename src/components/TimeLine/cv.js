import React, { Component } from "react";
import Button from '../../styles/GlobalComponents/Button';
import jsPDF from "jspdf";
import Talita from "../../img/Talita.png";

class Cv extends Component {
  generatePDF = () => {
    var doc = new jsPDF('p', 'pt');

    doc.addFont('helvetica', 'normal')
    
    doc.addImage(Talita, 'PNG', 0, 0, 600, 900)      

    doc.save('TalitaBenevesCV.pdf')
}

  render() {
    return (
      <div>
        <Button onClick={this.generatePDF} >Baixar CV</Button>
      </div>
    )
  }
}

export default Cv;



