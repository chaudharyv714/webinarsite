import '../App.css';

function card() {
   return (
      <>
         <div className="card">
            <div className="cardimage">
               <img src="chemdept.jpg" alt="Url" />
            </div>
            <div className="carddetails">
               <h2>Department of Chemical Engineering,NITC</h2>
               <p>Established in 2006, the Department of Chemical Engineering of NIT Calicut
                  offers programmes leading to Bachelor’s Degree, Master’s Degree as well as
                  Ph.D. The department is recognized primarily for its continual improvement in
                  academic output, and involved in a wide spectrum of active interdisciplinary
                  research with the state of the art laboratories facilities. Currently 19 faculties with
                  around more than 400 (students, research scholar and project staff) are working
                  in the department. </p>
            </div>
         </div>
         <div className="card">
            <div className="cardimage">
               <img src="techcontent.jpg" alt="Url" />
            </div>
            <div className="carddetails">
               <h2>Technical Content</h2>
               <p><ul>
                  <li> Various multiphase reactors: fundamentals - fluid dynamics, flow regimes,
                     mixing, and mass transfer</li>
                  <li>Multiphase modelling approaches: Eulerian-Eulerian, Eulerain-Lagrangian,
                     Volume of Fluid method; </li>
                  <li>Turbulent flow modelling in various reactors, specifically in reactive flows;
                  </li>
                  <li>Multiphase reactor modelling of post combustion CO2 capture and storage;</li>
                  <li>Multiphase reactor modelling of thermochemical conversion of biomass</li>
                  <li>Multiphase flow modelling of FCC riser;</li>
                  <li>Multi-phase Engineering - Selection and design of continuous industrial-scale
                     reactor</li>
                  <li>Modelling of modular multiphase flow reactors</li>
                  <li>Hydrodynamics of multiphase microreactors</li>
                  <li>Modelling of microwave heated multiphase reactors</li>
                  <li>Hydrodynamics and reactive flow modelling of gasification and combustion
                     processes</li>
                  <li>Hydrodynamics and reactive flow modelling of gasification and combustion
                     processes</li>
                  <li>CFD modelling of heat transfer equipment’s including phase change heat
                     exchanger</li>
                  <li>Particle motion in a rotary kiln using discrete element method</li>
                  <li>Flow modelling of industrial-scale boiler system</li>
               </ul>
               </p>
            </div>
         </div>
      </>
   );
}

export default card;