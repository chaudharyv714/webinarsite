import '../App';

function topics(){
    return(
        <div id="topics">
            <div className="one">

                    <div className="contentcard">
                        <span><i className="bg fas fa-drum-steelpan"></i></span>
                        <h2>Topics</h2>
                        <ul>
                            <li> Lorem ipsum dolor sit amet consectetur, a </li>
                            <li>Lorem ipsum dolor sit amet consectetur, a</li>
                            <li>Lorem ipsum dolor sit amet consectetur, a</li>
                        </ul>
                    </div>

                    <div className="contentcard">
                        <span><i className="bg fab fa-osi"></i></span>
                        <h2>Resources</h2>
                        <ul>
                            <li> Lorem ipsum dolor sit amet consectetur, a </li>
                            <li>Lorem ipsum dolor sit amet consectetur, a</li>
                            <li>Lorem ipsum dolor sit amet consectetur, a</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default topics;