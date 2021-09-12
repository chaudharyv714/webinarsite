import '../App.css';

function contactinfo(props){
    return(
        <div className="contactinfo">
            <div>
            <h3>{props.name}</h3>
            <img src={props.url} alt="profimage" />
           
            </div>
            
            <p>{props.design}</p>
            <p>{props.org}</p>
        </div>       
    );
};

export default contactinfo;