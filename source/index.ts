
export default function asArray<A>(any: A): A extends Array<any> ? A : A[] {
  if(Array.isArray(any)) {
    return any as A extends Array<any> ? A : A[];
  } else {
    return (any ? [any] : []) as A extends Array<any> ? A : A[];
  }
}
