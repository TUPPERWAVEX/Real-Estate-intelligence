// Stub function – returns a school catchment score from 0 (poor) to 20 (elite)
export function getSchoolCatchmentScore(address: string): number {
  // Simulate based on keyword in address
  if (address.toLowerCase().includes("brisbane") || address.toLowerCase().includes("toowong")) {
    return 18;
  }
  return 12;
}
