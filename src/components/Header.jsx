//Import Logo.jsx
import Logo from "../subcomponents/Logo";

//Header.jsx
export default function Header(props) {
  return (
    <header>
      <Logo />
      <div className="menu-header">
        <ul>
          {props.menuHeader.map((menu) => (
            <li key={menu.id}>
              <a href={menu.url}>{menu.text}</a>
              <div className="focusLine"></div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
