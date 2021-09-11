import '../App.css';

function navbar() {
    return (
      <div className="nav">
          <div className="listcontainer">
              <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Topics</a></li>
               <li><a href="#">Schedule</a></li>
               <li><a href="#">Committee</a></li>
               <li><a href="#">Contact</a></li>  
              </ul>
          </div>
      </div>
    );
  }
 
  export default navbar;