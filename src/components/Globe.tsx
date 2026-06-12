import { useState } from "react";
import Icon from "@/components/ui/icon";

interface GlobeStrings {
  detecting: string;
  detected: string;
  denied: string;
  locate: string;
  lat: string;
  lon: string;
  tracked: string;
}

type Status = "idle" | "detecting" | "done" | "denied";

interface Coords {
  lat: number;
  lon: number;
}

export default function Globe({ strings }: { strings: GlobeStrings }) {
  const [status, setStatus] = useState<Status>("idle");
  const [coords, setCoords] = useState<Coords | null>(null);

  const detect = () => {
    if (!navigator.geolocation) {
      setStatus("denied");
      return;
    }
    setStatus("detecting");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        setStatus("done");
      },
      () => setStatus("denied"),
      { enableHighAccuracy: false, timeout: 10000 }
    );
  };

  const fmt = (v: number, pos: string, neg: string) =>
    `${Math.abs(v).toFixed(4)}° ${v >= 0 ? pos : neg}`;

  // Marker position on the globe face (projected from lat/lon)
  const markerPos = coords
    ? {
        x: 50 + (coords.lon / 180) * 38,
        y: 50 - (coords.lat / 90) * 38,
      }
    : null;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      {/* Globe */}
      <div style={{ position: "relative", width: 260, height: 260 }}>
        {/* Outer glow ring */}
        <div
          style={{
            position: "absolute",
            inset: -10,
            borderRadius: "50%",
            border: "1px solid rgba(139,26,26,0.25)",
            boxShadow: "0 0 60px rgba(139,26,26,0.25), inset 0 0 40px rgba(139,26,26,0.15)",
          }}
        />
        {/* Scanning ring */}
        <div className="globe-scan-ring" />

        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", position: "relative", zIndex: 2 }}>
          <defs>
            <radialGradient id="globeGrad" cx="38%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#1c2330" />
              <stop offset="60%" stopColor="#0d1018" />
              <stop offset="100%" stopColor="#050608" />
            </radialGradient>
            <clipPath id="globeClip">
              <circle cx="50" cy="50" r="40" />
            </clipPath>
          </defs>

          {/* Sphere */}
          <circle cx="50" cy="50" r="40" fill="url(#globeGrad)" stroke="rgba(139,26,26,0.5)" strokeWidth="0.6" />

          {/* Rotating meridian grid */}
          <g clipPath="url(#globeClip)">
            <g className="globe-rotate" style={{ transformOrigin: "50px 50px" }}>
              {/* Parallels (latitude lines) */}
              {[-30, -15, 0, 15, 30].map((y, i) => (
                <ellipse
                  key={`p${i}`}
                  cx="50"
                  cy={50 + y}
                  rx="40"
                  ry={Math.max(2, 40 - Math.abs(y) * 1.0)}
                  fill="none"
                  stroke="rgba(139,26,26,0.28)"
                  strokeWidth="0.4"
                />
              ))}
              {/* Meridians (longitude lines) */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <ellipse
                  key={`m${i}`}
                  cx="50"
                  cy="50"
                  rx={Math.max(3, 40 - i * 7)}
                  ry="40"
                  fill="none"
                  stroke="rgba(139,26,26,0.2)"
                  strokeWidth="0.4"
                />
              ))}
              {/* Scattered target dots */}
              {[
                [38, 32], [60, 40], [45, 55], [66, 60], [32, 48],
                [54, 28], [40, 68], [58, 70], [70, 50],
              ].map(([cx, cy], i) => (
                <circle key={`d${i}`} cx={cx} cy={cy} r="0.9" fill="#C0392B" opacity="0.8">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </g>
          </g>

          {/* Static central meridian + equator highlight */}
          <ellipse cx="50" cy="50" rx="40" ry="40" fill="none" stroke="rgba(139,26,26,0.15)" strokeWidth="0.3" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(192,57,43,0.35)" strokeWidth="0.3" />

          {/* Visitor marker */}
          {markerPos && (
            <g>
              <circle cx={markerPos.x} cy={markerPos.y} r="2.5" fill="none" stroke="#C0392B" strokeWidth="0.5">
                <animate attributeName="r" values="2;7;2" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx={markerPos.x} cy={markerPos.y} r="2" fill="#C0392B" />
            </g>
          )}
        </svg>
      </div>

      {/* Coordinates readout */}
      <div
        style={{
          width: "100%",
          maxWidth: 320,
          background: "var(--cascade-charcoal)",
          border: "1px solid var(--cascade-line)",
          padding: "16px 18px",
          fontFamily: "Oswald",
        }}
      >
        {status === "idle" && (
          <button className="btn-cascade" onClick={detect} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 20px", fontSize: "0.8rem" }}>
            <Icon name="Crosshair" size={15} />
            {strings.locate}
          </button>
        )}

        {status === "detecting" && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--cascade-red)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
            <Icon name="LoaderCircle" size={15} className="globe-spin" />
            {strings.detecting}
          </div>
        )}

        {status === "done" && coords && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--cascade-red)", fontSize: "0.7rem", letterSpacing: "0.15em" }}>
              <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--cascade-red)" }} />
              {strings.tracked}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--cascade-line)", paddingTop: 10 }}>
              <span style={{ color: "#6B7280", fontSize: "0.72rem", letterSpacing: "0.1em" }}>{strings.lat}</span>
              <span style={{ color: "var(--cascade-light)", fontSize: "0.85rem", letterSpacing: "0.05em" }}>{fmt(coords.lat, "N", "S")}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#6B7280", fontSize: "0.72rem", letterSpacing: "0.1em" }}>{strings.lon}</span>
              <span style={{ color: "var(--cascade-light)", fontSize: "0.85rem", letterSpacing: "0.05em" }}>{fmt(coords.lon, "E", "W")}</span>
            </div>
            <div style={{ color: "#6B7280", fontSize: "0.72rem", letterSpacing: "0.05em", marginTop: 2, fontFamily: "IBM Plex Sans" }}>
              {strings.detected}
            </div>
          </div>
        )}

        {status === "denied" && (
          <button className="btn-cascade-outline" onClick={detect} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 20px", fontSize: "0.8rem" }}>
            <Icon name="TriangleAlert" size={15} />
            {strings.denied}
          </button>
        )}
      </div>
    </div>
  );
}
