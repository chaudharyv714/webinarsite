import '../App.css';

function schedule() {
    return (
        <div id="schedule" className="schedule">
            <div className="scheduleone">
                <h2>Schedule</h2>
                <ul>
                    <li> September 20,2021 :<br /> Online Registration Starts </li>
                    <br />
                    <li> October 22,2021: <br />Last day for Registration</li>

                </ul>
            </div>
            <div className="scheduletwo">
                <h2>How to Register</h2>
                <ul>
                    <li>Online registration can be made by through the workshop website.</li>
                    <li>Note: For 20 selected Indian student participants, the registration fee (1,180 INR)
                        will be waived by the host institute through the DST/SERB support</li>
                    <li>Mode of Payment (Online Only) </li>

                </ul>
                <button className="applylink">
                    <a href="#">Register</a> </button>
            </div>
        </div>
    );
};
export default schedule;