import CoreConcept from './CoreConcept.jsx'
import { CORE_CONCEPTS } from '../data.js';
export default function CoreConcepts(){
    return(
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>

          {CORE_CONCEPTS.map((conceptItem)=>
            <CoreConcept {...conceptItem} />
          )}

          {/* 
            By doing this, we eliminate the need to be reliant on the data source. 
            We take an object, map it, which converts it to an array and use array destructuring to dynamically display our UI changes

         {CORE_CONCEPTS.map(
            (conceptItem) => (
            <CoreConcept key ={title} {...conceptItem} />
            ))}

          This is valid but if the data file gets corrupted, UI isn't displayed dynamically. 

          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
          */}          
        </ul>
      </section>

    );
}