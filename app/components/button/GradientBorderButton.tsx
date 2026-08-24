export default function GradientBorderButton() {
  return (
    <>
      {/* SVG filters required by the blur()+url(#id) combos in globals.css.
          Rendered once, hidden, referenced by id. */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq">
          <feColorMatrix
            values="1 0 0 0 0 
              0 1 0 0 0 
              0 0 1 0 0 
              0 0 0 9 0"
          />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq2">
          <feColorMatrix
            values="1 0 0 0 0 
              0 1 0 0 0 
              0 0 1 0 0 
              0 0 0 3 0"
          />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq3">
          <feColorMatrix
            values="1 0 0 0.2 0 
              0 1 0 0.2 0 
              0 0 1 0.2 0 
              0 0 0 2 0"
          />
        </filter>
      </svg>

      <button className="gbb-real-button " />
      <div className="gbb-backdrop" />
      <div className="gbb-button-container">
        <div className="gbb-spin gbb-spin-blur" />
        <div className="gbb-spin gbb-spin-intense" />
        <div className="gbb-backdrop" />

        <div className="gbb-button-border ">
          <div className="gbb-spin gbb-spin-inside" />
          <div className="gbb-button">Contact Us</div>
        </div>
      </div>
    </>
  );
}