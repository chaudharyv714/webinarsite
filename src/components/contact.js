import '../App.css';
import Card from './contactcard';
function contact(){
    return(
        <div id="contact">
            <h4>Contact <span className="line">ContactDetails</span> </h4>
            <h2>CONTACT US</h2>
            <div id="contactdetails">
                <Card icon="bg fas fa-phone-alt"
                        detname="Phone:"
                            det1="+91-123456789"
                                det2="+91-987654321"/>
                <Card icon="bg fas fa-map-marker-alt"
                        detname="Office:"
                            det1="Add1"
                                det2="Add2"/>
                <Card icon="bg fas fa-envelope"
                        detname="Email:"
                            det1="aj@a.com"
                                det2="b@b.com"/>                                
               
            </div>
        </div>
    );
};
export default contact;