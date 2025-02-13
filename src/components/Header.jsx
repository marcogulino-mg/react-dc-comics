//Header.jsx
export default function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src="./img/dc-logo.png" alt="logo DC" />
      </div>
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
