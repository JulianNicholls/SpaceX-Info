export function formatSentences(text: string): string {
  return text ? text.replace(/\.\s+/g, '.\n\n') : '';
}
