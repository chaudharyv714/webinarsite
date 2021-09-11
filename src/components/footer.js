import '../App.css';

function footer() {
    return (
        <div id="footer">
            <div id="first">
                <div id="log-box">
                    <h2>Webinar</h2>
                    <p>Lorem ipsum,
                         dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div id="follow">
                <p className="footext">Useful Links</p>
                    <div>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div id="call">
                <img src="logoinvert.jpg" alt="nitc" />
                </div>
            </div>
            <span className="whitebr"></span>
            <div id="second">
                <div id="credits">Design and Dev: <a href="#">Vipin Chaudhary</a></div>
                <div id="pptc">
                    <span>PRIVACY POLICY</span>
                    <span>TERMS AND CONDITIONS</span>
                </div>

            </div>
        </div>
    );
}
export default footer;