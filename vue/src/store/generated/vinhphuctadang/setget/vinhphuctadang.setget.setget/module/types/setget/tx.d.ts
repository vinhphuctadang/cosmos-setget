import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "vinhphuctadang.setget.setget";
export interface MsgSet {
    creator: string;
    x: string;
}
export interface MsgSetResponse {
    result: string;
}
export declare const MsgSet: {
    encode(message: MsgSet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSet;
    fromJSON(object: any): MsgSet;
    toJSON(message: MsgSet): unknown;
    fromPartial(object: DeepPartial<MsgSet>): MsgSet;
};
export declare const MsgSetResponse: {
    encode(message: MsgSetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetResponse;
    fromJSON(object: any): MsgSetResponse;
    toJSON(message: MsgSetResponse): unknown;
    fromPartial(object: DeepPartial<MsgSetResponse>): MsgSetResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    Set(request: MsgSet): Promise<MsgSetResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Set(request: MsgSet): Promise<MsgSetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
