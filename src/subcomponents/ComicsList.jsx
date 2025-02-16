//Import comics.js
import comicsData from "./comics";
//Import ComicCard.jsx
import ComicCard from "./ComicCard";

//ComicsList.jsx
export default function ComicsList() {
  return (
    <div className="comicslist">
      <ComicCard comicsData={comicsData} />
    </div>
  );
}
