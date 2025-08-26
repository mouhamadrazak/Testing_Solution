export function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function CleanSearch(query) {
  return query.toLowerCase().trim().split(/\s+/).filter(Boolean);
}

export function countWords(haystack, terms) {
  if (!terms.length)
     return 0;
  const lc = haystack.toLowerCase();
  return terms.reduce((sum, t) => sum + (lc.includes(t) ? 1 : 0), 0);
}