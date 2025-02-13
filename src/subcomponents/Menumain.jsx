//Menumain.jsx
export default function MenuMain() {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <img
            src="./img/buy-comics-digital-comics.png"
            alt="Digital Comics"
            className="img-main-menu"
          />
          <h3>DIGITAL COMICS</h3>
        </li>
        <li>
          <img
            src="./img/buy-comics-merchandise.png"
            alt="DC Merchandise"
            className="img-main-menu"
          />
          <h3>DC MERCHANDISE</h3>
        </li>
        <li>
          <img
            src="./img/buy-comics-subscriptions.png"
            alt="Subscription"
            className="img-main-menu"
          />
          <h3>SUBSCRIPTION</h3>
        </li>
        <li>
          <img
            src="./img/buy-comics-shop-locator.png"
            alt="Comic Shop Locator"
            className="img-fix"
          />
          <h3>COMIC SHOP LOCATOR</h3>
        </li>
        <li>
          <img
            src="./img/buy-dc-power-visa.svg"
            alt="DC Power Visa"
            className="img-main-menu"
          />
          <h3>DC POWER VISA</h3>
        </li>
      </ul>
    </nav>
  );
}
