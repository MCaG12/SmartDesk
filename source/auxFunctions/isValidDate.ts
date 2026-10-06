export default function isValidDate(date: Date): boolean {
  return !isNaN(date.getTime());
}