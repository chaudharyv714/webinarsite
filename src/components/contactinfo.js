import '../App.css';

function contactinfo(props){
    return(
        <div className="contactinfo">
            <h3>{props.name}</h3>
            <p>{props.design}</p>
            <p>{props.org}</p>
        </div>       
    );
};

export default contactinfo;