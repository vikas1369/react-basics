export default function (props) {
    function handleOnClick(){
        console.log("Button Clicked");
    }
    return <li><button onClick={handleOnClick}>{props.children}</button></li>;//
}