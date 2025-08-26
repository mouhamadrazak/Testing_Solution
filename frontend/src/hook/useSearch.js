import { useEffect, useMemo, useState } from "react";
import { CleanSearch, countWords } from "../utils/text";

export function useSearch(allArticles) {
  const [raw, setRaw] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const id = setTimeout(() => setQuery(raw), 200);
    return () => clearTimeout(id);
  }, [raw]);

  
  const terms = useMemo(() => CleanSearch(query), [query]);

  const results = useMemo(() => {
    if (!terms.length) return allArticles;

    return allArticles
      .map((article) => {
        const score =
          countWords(article.title + " " + article.excerpt, terms) +
          (article.title.toLowerCase().includes(terms[0] ?? "") ? 1 : 0); // tiny boost if match in title
        return { article, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.article);
  }, [allArticles, terms]);

  return { raw, setRaw, query, terms, results };
}
