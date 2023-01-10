
export type AsItem<A> = A extends Array<any> ? A[number] : A;

export type AsArray<A> = A extends Array<any> ? A : A[];

export function isArray<A>(any: AsArray<A> | AsItem<A>): any is AsArray<A> {
  return Array.isArray(any);
}

export default function asArray<A>(any: AsArray<A> | AsItem<A>): AsArray<A> {
  if(isArray(any)) {
    return any;
  } else {
    return [any] as AsArray<A>;
  }
}
