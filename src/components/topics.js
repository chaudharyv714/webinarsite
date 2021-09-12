import '../App';

function topics() {
    return (
        <div id="topics">
            <div className="one">
                <div className="contentcard">
                    <span><i className="bg fas fa-drum-steelpan"></i></span>
                    <h2>Workshop Fee:</h2>
                    <ul>
                        <li> The workshop fee (non-refundable) for students, faculty and industry participants: </li>
                        <li>Students (PG & PhD):INR 590 (500+18%GST)</li>
                        <li>Faculty & Industry:INR 1180(1000+18%GST)</li>
                    </ul>
                </div>

                <div className="contentcard">
                    <span><i className="bg fab fa-osi"></i></span>
                    <h2>Mode of Payment</h2>
                    <ul>
                        <li>Bank: State Bank of India</li>
                        <li>Branch Name : NITC Branch</li>
                        <li>A/C Name : Director, NIT Calicut</li>
                        <li>A/C Number : 37618269594<br/>
                            IFSC Code : SBIN0002207<br/>
                            MICR No. : 673002012</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default topics;