import '../App.css';

function contactcard(props){
    return(
        <div className="contactcard">
            <div className="contactcardfirst">
                <i className={props.icon}></i>
            </div>
            <div className="contactcardsecond">
                <h3>{props.detname}</h3>
                <a href={props.url1}>{props.det1}</a>
                <a href={props.url2}>{props.det2}</a>
            </div>
        </div>
    );
}   

export default contactcard;