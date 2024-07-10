import { useState } from 'react';
//anything starting with use is a React Hook
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState(); 
    //useState returns array with 2 values. We use array destructuring
    //selectedTopis is the current state setSelectedTopic re executes the App component function
  
    //It MUST be declared here. only call it inside component function at the top level
    //we will use state to make sure the UI updates 
  
    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
      //console.log(selectedButton);
  }
  

    return(
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedTopic === 'components'}onSelect={() =>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected = {selectedTopic === 'jsx'}onSelect={() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === 'props'}onSelect={() =>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === 'state'}onSelect={() =>handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p> 
          ) : (
            <div id = "tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          )}
          
        </section>
    );
};