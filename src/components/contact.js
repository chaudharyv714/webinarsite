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
                        det1="+91-8138828477"
                        det2="+91-495-228-5469"
                        url1="tel:8138828477"
                        url2="tel:4952285469"/>
                <Card icon="bg fas fa-map-marker-alt"
                        detname="Dr Panneerselvam Ranganathan"
                        det1="Sustainable Reaction Engineering Lab"
                        det2="Department of Chemical Engineering"
                        url1="#"
                        url2="#"/>
                <Card icon="bg fas fa-envelope"
                        detname="Email:"
                        det1="mmrefia@nitc.ac.in"
                        det2="pranganathan@nitc.ac.in"
                        url1="mailto:mmrefia@nitc.ac.in"
                        url2="mailto:pranganathan@nitc.ac.in"/>                                
               
            </div>
        </div>
    );
};
export default contact;