import '../App.css';
import Card from './contactinfo';

function committee(){
    return(
        <div className="committee">
            <h4>COMMITTEE <span className="line">asdfghjkzghjk</span>  </h4>
            <h2>COORDINATERS</h2>
            <div className="committeecards">
                <Card name="Dr Panneerselvam Ranganathan"
                        url="8.png"
                        design="Sustainable Reaction Engineering Lab"
                        org="Department of Chemical Engineering"/>
                <Card name="Department of Chemical Engineering"
                        url="logo3.png"
                        design="National Institute of Technology Calicut"
                        org="Calicut (Kozhikode) - 673601, Kerala"/>
            </div>
        </div>
    );
};

export default committee;