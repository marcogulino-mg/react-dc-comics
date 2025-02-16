//ComicCard.jsx
export default function ComicCard(props) {
  return props.comicsData.map((comicData) => (
    <div key={comicData.id} className="comic-card">
      <div className="photo-container">
        <img
          className={comicData.active && "fix-image"}
          src={comicData.thumb}
          alt={comicData.title}
        />
      </div>
      <h4>{comicData.series.toUpperCase()}</h4>
    </div>
  ));
}
