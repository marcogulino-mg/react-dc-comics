//Header.jsx

const menuHeader = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP",
];

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src="./img/dc-logo.png" alt="logo DC" />
      </div>
      <div className="menu-header">
        <ul>
          {menuHeader.map((menu) => (
            <li>
              {menu} <div className="focusLine"></div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
