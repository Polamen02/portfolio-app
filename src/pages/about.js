import React from "react";
import Photo from "../yo.JPG"
import './about.css';


const About = () =>{
    return (
      <div className="wrapper">
        <h1 class="sectionTitle">Sobre mi</h1>
        <div className="heroImg">
          <img
            src={Photo}
          />
        </div>
        <div className="bio">
          <p></p>
          <p>
            Pepper jack cheesy feet cheese slices. Halloumi port-salut queso
            caerphilly roquefort cheese slices cheesy feet rubber cheese. Cheese
            slices smelly cheese pecorino macaroni cheese feta blue castello
            roquefort edam. Babybel pepper jack airedale cheddar fromage frais
            manchego.
          </p>
          <p>
            Cauliflower cheese lancashire macaroni cheese. Cheeseburger babybel
            cheese on toast airedale cauliflower cheese who moved my cheese
            roquefort paneer. Stinking bishop cheddar taleggio port-salut
            port-salut stinking bishop cheesy grin babybel. Blue castello feta
            everyone loves brie.
          </p>
          <p>
            Goat squirty cheese cut the cheese. Cheese and wine cheddar fondue
            airedale cottage cheese camembert de normandie feta babybel. Rubber
            cheese melted cheese pecorino port-salut fondue gouda cheese on
            toast cheesy feet. Feta edam everyone loves cheese strings camembert
            de normandie.
          </p>
          <p>
            Caerphilly monterey jack goat. Squirty cheese cheesy grin hard
            cheese cheese strings cheese and biscuits croque monsieur smelly
            cheese danish fontina. Swiss cheese triangles everyone loves
            mascarpone cheese on toast who moved my cheese lancashire
            cheeseburger. Fromage frais fromage frais cheese and biscuits
            stinking bishop cauliflower cheese.
          </p>
        </div>
      </div>
    );
}
export default About;