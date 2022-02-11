import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "vinhphuctadang.setget.setget";
export interface Value {
    value: string;
}
export declare const Value: {
    encode(message: Value, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    fromPartial(object: DeepPartial<Value>): Value;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
