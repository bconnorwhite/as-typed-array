import { expectType } from "tsd";
import asArray from "../source/index.js";

expectType<number[]>(asArray(1));

type MaybeNumber = number | undefined;

const maybe: MaybeNumber = 1;

expectType<number[]>(asArray(maybe));

expectType<never[]>(asArray([]));
expectType<number[]>(asArray([1]));
expectType<number[]>(asArray([1, 2, 3]));

