//Import comics.js
import comicsData from "./comics";
//Import ComicCard.jsx
import ComicCard from "./ComicCard";

//ComicsList.jsx
export default function ComicsList(props) {
  return (
    <div className="comicslist">
      <div className="title-section">{props.sectionTitle}</div>
      <ComicCard comicsData={comicsData} />
    </div>
  );
}
