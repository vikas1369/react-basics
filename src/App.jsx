import reactImage from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
import {CORE_CONCEPTS} from './data'
import Header from './components/Header'
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
    function handleSelect(){
        console.log("Button Selected");
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
                        <TabButton onSelect={handleSelect}>Components</TabButton>
                        <TabButton>JSX</TabButton>
                        <TabButton>Props</TabButton>
                        <TabButton>State</TabButton>
                    </menu>

                </section>
            </main>
        </div>
    );
}

export default App;
