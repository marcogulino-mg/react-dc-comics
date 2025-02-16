//Import MenuMain.jsx
import MenuMain from "../subcomponents/Menumain";
//Import BannerMain.jsx
import BannerMain from "../subcomponents/BannerMain";
//Import ComicsList.jsx
import ComicsList from "../subcomponents/ComicsList";

//Main.jsx
export default function Main() {
  return (
    <main>
      <section className="content">
        <BannerMain imgurl="./img/jumbotron.jpg" />
        <ComicsList />
      </section>
      <MenuMain />
    </main>
  );
}
