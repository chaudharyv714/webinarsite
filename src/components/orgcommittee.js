import '../App.css';
import Card from './contactinfo';

function committee() {
        return (
                <div id="committee" className="committee">
                        <h4>COMMITTEE <span className="line">asdfghjkzghjk</span>  </h4>
                        <h2>ORGANISING COMMITTEE</h2>
                        <div className="committeecards">
                                <Card name="Mr. Ananth Sharma"
                                        url="1.png"
                                        design="Staff Scientist"
                                        org="SAFIC, Bangalore" />
                                <Card name="Prof Arnab Atta"
                                        url="2.png"
                                        design="Associate Professor"
                                        org="IIT KGP" />
                                <Card name="Dr. Chanchal Loka"
                                        url="3.png"
                                        design="Principal Scientist"
                                        org="CSIR-CMREI, Durgapur" />
                                <Card name="Mr Gokulakrishanan A"
                                        url="4.png"
                                        design="CFD Manager"
                                        org="L&T MHPS Faridabad" />
                                <Card name="Dr. Kumaresan Thangaraj"
                                        url="5.png"
                                        design="Senior Research Scientist"
                                        org="Saint-Gobain Research India, Chennai" />
                                <Card name="Dr B.N. Murthy "
                                        url="6.png"
                                        design="Lead Research Scientist"
                                        org="Relaince India" />
                                <Card name="Dr P.N. Naren"
                                        url="7.png"
                                        design="Associate Professor"
                                        org="Sastra University,Thanjauar" />
                                <Card name="Dr Panneerselvam Ranganathan"
                                        url="8.png"
                                        design="Assitant Professor"
                                        org="NITC" />
                                <Card name="Prof Raghvendra Gupta"
                                        url="9.png"
                                        design="Associate Professor"
                                        org="IIT Guwahati" />
                                <Card name="Mr S. Saravanan"
                                        url="10.png"
                                        design="Cheif Research Manager"
                                        org="IOCL, Faridabad" />
                                <Card name="Prof Sanatanu De"
                                        url="11.png"
                                        design="Associate Professor"
                                        org="IIT Kanpur" />
                                <Card name="Dr S. Savithri"
                                        url="12.png"
                                        design="Cheif Scientist "
                                        org="CSIR-NIIST, Trivamdrum" />
                                <Card name="Dr. Sreepriya Vedantam"
                                        url="13.png"
                                        design="Principal Scientist"
                                        org="CSIR-IICT, Hyderabad" />
                                <Card name="Prof Vivek V.Buwa"
                                        url="14.png"
                                        design="Professor"
                                        org="IIT Delhi" />
                                <Card name="Dr Vivek Vitankar"
                                        url="15.png"
                                        design="Director"
                                        org="FluiDimesions, Pune" />
                        </div>
                </div>
        );
};

export default committee;