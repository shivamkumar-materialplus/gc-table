import { Order } from "./types";

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function formatDate(dateString: string): string {
  const today = new Date();
  const targetDate = new Date(dateString);
  // Today Check
  if (
    today.getFullYear() === targetDate.getFullYear() &&
    today.getMonth() === targetDate.getMonth() &&
    today.getDate() === targetDate.getDate()
  ) {
    return "Today";
  }

  // Yesterday check
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (
    yesterday.getFullYear() === targetDate.getFullYear() &&
    yesterday.getMonth() === targetDate.getMonth() &&
    yesterday.getDate() === targetDate.getDate()
  ) {
    return "Yesterday";
  }

  return dateString;
}
