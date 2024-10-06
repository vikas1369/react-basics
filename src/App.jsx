import reactImage from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
import {CORE_CONCEPTS} from './data'
import Header from './components/Header'
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from 'react';
import {EXAMPLES} from "./data-with-examples";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
    console.log("App rendered")
    //States are React variables which are bound to the Component that when changed causes the component to be re-rendered

    return (
        <div>
            <Header/>
            <main>
                <CoreConcepts></CoreConcepts>
                <Examples></Examples>
            </main>
        </div>
    );
}

export default App;
