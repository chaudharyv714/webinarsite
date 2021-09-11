import '../App.css';
import Card from './contactinfo';

function committee(){
    return(
        <div className="committee">
            <h4>COMMITTEE <span className="line">asdfghjkzghjk</span>  </h4>
            <h2>COORDINATeERS</h2>
            <div className="committeecards">
                <Card name="Prof1"
                        design="Chem prof"
                        org="nitc"/>
                <Card name="Prof2"
                        design="Chem prof"
                        org="nitc"/>
            </div>
        </div>
    );
};

export default committee;