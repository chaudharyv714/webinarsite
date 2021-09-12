import '../App.css';
import Card from './contactinfo';

function committee(){
    return(
        <div id="committee" className="committee">
            <h4>COMMITTEE <span className="line">asdfghjkzghjk</span>  </h4>
            <h2>ORGANISING COMMITTEE</h2>
            <div className="committeecards">
                <Card name="Prof1"
                        design="Chem prof"
                        org="nitc"/>
                <Card name="Prof2"
                        design="Chem prof"
                        org="nitc"/>
                <Card name="Prof3"
                        design="Chem prof"
                        org="nitc"/>
                <Card name="Prof4"
                        design="Chem prof"
                        org="nitc"/>
                <Card name="Prof5"
                        design="Chem prof"
                        org="nitc"/>
                <Card name="Prof6"
                        design="Chem prof"
                        org="nitc"/>
                <Card name="Prof7"
                        design="Chem prof"
                        org="nitc"/>
                <Card name="Prof8"
                        design="Chem prof"
                        org="nitc"/>                     
            </div>
        </div>
    );
};

export default committee;