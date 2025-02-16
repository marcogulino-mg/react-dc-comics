//BannerMain.jsx
export default function BannerMain(props) {
  return (
    <div
      className="banner-main"
      style={{ backgroundImage: `url(${props.imgurl})` }}
    ></div>
  );
}
