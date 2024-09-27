export default function ({children, onSelect}) {

    return <li><button onClick={onSelect}>{children}</button></li>;//
}