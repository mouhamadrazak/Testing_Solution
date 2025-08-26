import React from "react";
import Highlight from "./Highlight";

export default function ResultItem({ article, terms }) {
  const date = new Date(article.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="text-xl font-semibold leading-snug">
        <Highlight text={article.title} terms={terms} />
      </h3>
      <p className="mt-1 text-sm text-gray-500">{date}</p>
      <p className="mt-3 text-gray-700 leading-relaxed">
        <Highlight text={article.excerpt} terms={terms} />
      </p>
    </article>
  );
}
