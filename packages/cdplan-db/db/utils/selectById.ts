export default function selectById<T extends { id: F }, F extends string | number>(
  record: Record<string, T>,
  id: F
): T | undefined {
  return Object.values(record).find((item) => item.id && item.id === id);
}
