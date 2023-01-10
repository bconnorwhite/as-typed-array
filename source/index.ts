
export type AsItem<A> = A extends Array<any> ? A[number] : A;

export type AsArray<A> = A extends Array<any> ? A : A[];

export default function asArray<A>(any: A): AsArray<A> {
  if(Array.isArray(any)) {
    return any as AsArray<A>;
  } else {
    return [any] as AsArray<A>;
  }
}
