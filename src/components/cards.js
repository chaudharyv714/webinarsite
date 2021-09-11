import '../App.css';

function card(props) {
    return (
      <div className="card">
         <div className="cardimage">
            <img src={props.url} alt="Url" />
         </div>
         <div className="carddetails">
             <h2>{props.head}</h2>
            <p>{props.text}</p>
         </div>
      </div>
    );
  }
 
  export default card;