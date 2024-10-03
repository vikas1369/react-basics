import reactImage from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
import {CORE_CONCEPTS} from './data'
import Header from './components/Header'
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from 'react';
import {EXAMPLES} from "./data-with-examples";

function App() {
    console.log("App rendered")
    //States are React variables which are bound to the Component that when changed causes the component to be re-rendered
    const[selectedTopic, setSelectedTopic] = useState();//useState should be called inside the Component function and should be at the top level not inside some function
    function handleSelect(selectedButton){
        console.log("Button Selected");
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                <h2>Core Concept</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}//If property name in CORE_CONCEPTS obj matches with the prop names of the component
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                            image={CORE_CONCEPTS[1].image}
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[2].description}
                            image={CORE_CONCEPTS[2].image}
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}
                        />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                    </menu>
                    {!selectedTopic && <p>Please select a topic </p> }
                    {selectedTopic && // When applying logical operator it should be applied on the some parent html tag not on tags which are running in parallel like <p></p><p></p>
                        //If condition evaluates to true because of using && it will output the statement after &&
                        (<div id="tab-content">
                     <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>)
                    }
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
