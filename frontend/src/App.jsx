import React from "react";
import SearchInput from "./components/SearchInput";
import ResultItem from "./components/ResultItem";
import { useSearch } from "./hook/useSearch";
import { ARTICLES } from "./data/articles";

export default function App() {
  const { raw, setRaw, terms, results } = useSearch(ARTICLES);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Search</h1>
        <p className="mt-1 text-sm text-gray-600">
          Type a keyword; matches will be{" "}
          <span className="bg-yellow-200 px-1 rounded">highlighted</span>.
        </p>
        <div className="mt-4">
          <SearchInput value={raw} onChange={setRaw} />
        </div>
      </header>

      <section>
        <p className="text-sm text-gray-600 mb-3">
          {results.length} {results.length === 1 ? "result" : "results"}
          {terms.length > 0 && (
            <>
              {" "}
              for <span className="font-medium">“{terms.join(" ")}”</span>
            </>
          )}
        </p>

        {results.length === 0 ? (
          <div className="rounded-xl border bg-white p-6 text-gray-600">
            No results. Try different keywords or fewer terms.
          </div>
        ) : (
          <div className="grid gap-4">
            {results.map((a) => (
              <ResultItem key={a.id} article={a} terms={terms} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
