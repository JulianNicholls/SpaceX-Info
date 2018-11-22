export function formatSentences(text) {
  return text ? text.replace(/\.\s+/g, '.\n\n') : '';
}
