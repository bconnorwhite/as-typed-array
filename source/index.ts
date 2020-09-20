
export default function asArray<T>(any: (T | T[])): T[] {
  if(any === undefined) {
    return [];
  } else if(Array.isArray(any)) {
    return any;
  } else {
    return [any];
  }
}
