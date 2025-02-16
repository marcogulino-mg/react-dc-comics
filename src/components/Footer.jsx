//Import FooterCta.jsx
import FooterCta from "../subcomponents/FooterCta";
//Import FooterMenu.jsx
import FooterMenu from "../subcomponents/FooterMenu";

//Footer.jsx
export default function Footer() {
  return (
    <footer>
      <FooterMenu />
      <FooterCta />
    </footer>
  );
}
