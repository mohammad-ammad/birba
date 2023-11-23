const bannerStyles = {
    backgroundImage: "url('/assets/r2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "50px 10px",
    width: "100%",
};
export default function FloorMap() {
  return (
    <div className="pt-20">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Floor Map</div>
      </div>
    </div>
  );
}
