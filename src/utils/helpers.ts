export const capitalize = (text: string) =>
  text.split(" ").map((word: string) => word[0].toUpperCase() + word.slice(1)).join(' ');
