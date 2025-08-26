import React from "react";
import { escapeRegex } from "../utils/text";

export default function Highlight({ text, terms }) {
  if (!terms || terms.length === 0) return <>{text}</>;

  const regex = new RegExp(`(${terms.map(escapeRegex).join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 rounded-sm px-0.5 ">
            {part}
          </mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}