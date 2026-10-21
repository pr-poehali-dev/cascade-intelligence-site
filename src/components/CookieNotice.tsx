import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  ok: string;
  more: string;
}

const KEY = "cascade-cookie-ok";

const CookieNotice = ({ text, ok, more }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* private mode */
    }
    setShow(false);
  };

  return (
    <div role="region" aria-label="Cookie" className="cookie-notice">
      <p>
        {text}{" "}
        <Link to="/privacy" style={{ color: "var(--cascade-red-text)" }}>{more}</Link>
      </p>
      <button type="button" onClick={accept} className="btn-cascade" style={{ padding: "9px 20px", flexShrink: 0 }}>
        {ok}
      </button>
    </div>
  );
};

export default CookieNotice;
