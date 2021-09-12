import '../App.css';

function footer() {
    return (
        <div id="footer">
            <div id="first">
                <div id="log-box">
                    <h2> ONLINE WORKSHOP</h2>
                    <p>Modelling of Multiphase Reactor Engineering: Fundamentals and
                        Industrial Applications<br/>
                        October 25-29, 2021</p>
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
                <div id="credits">Design and Dev: <a href="https://www.linkedin.com/in/vipin-chaudhary-1a1852190/">Vipin Chaudhary</a></div>
                <div id="pptc">
                    <span>PRIVACY POLICY</span>
                    <span>TERMS AND CONDITIONS</span>
                </div>

            </div>
        </div>
    );
}
export default footer;