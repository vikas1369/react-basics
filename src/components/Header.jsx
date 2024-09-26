import reactImage from "../assets/react-core-concepts.png";
const arr = ["Crucial", "Fundamental", "Important"];
function getHeading(){
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


export default function Header(){//New component
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