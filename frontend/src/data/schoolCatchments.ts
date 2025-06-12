export function getSchoolCatchmentScore(address: string): number {
  const addr = address.toLowerCase();

  if (addr.includes("brisbane state high") || addr.includes("indooroopilly") || addr.includes("toowong")) {
    return 18; // Elite catchments
  }

  if (addr.includes("logan") || addr.includes("woodridge")) {
    return 10; // Low demand catchments
  }

  return 14; // Default
}
