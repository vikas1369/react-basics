import reactImage from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
import {CORE_CONCEPTS} from './data'
const arr = ["Crucial", "Fundamental", "Important"];
function getHeading(){
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
function Header(){//New component
    const title = getHeading();
    return (
        <header>
            <img src={reactImage} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {title} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

function CoreConcept(props) {
    return (
      <li>
          <img src={componentImg} alt={props.title}/>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
      </li>
    );
}

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                <h2>Core Concept</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
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
            </main>
        </div>
    );
}

export default App;
