import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data-with-examples";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();//useState should be called inside the Component function and should be at the top level not inside some function
    function handleSelect(selectedButton) {
        console.log("Button Selected");
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }

    let tabContect = <p>Please select a topic </p>;
    if(selectedTopic){
        tabContect =  (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
        </div>);
    }

    return (
    <section id="examples">
        <h2>Examples</h2>
        <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
        </menu>
        {tabContect}
    </section>
    );
}