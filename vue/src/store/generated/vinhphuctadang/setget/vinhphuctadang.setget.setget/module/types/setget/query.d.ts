import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../setget/params";
export declare const protobufPackage = "vinhphuctadang.setget.setget";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetRequest {
}
export interface QueryGetResponse {
    value: string;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetRequest: {
    encode(_: QueryGetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRequest;
    fromJSON(_: any): QueryGetRequest;
    toJSON(_: QueryGetRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetRequest>): QueryGetRequest;
};
export declare const QueryGetResponse: {
    encode(message: QueryGetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetResponse;
    fromJSON(object: any): QueryGetResponse;
    toJSON(message: QueryGetResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetResponse>): QueryGetResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Get items. */
    Get(request: QueryGetRequest): Promise<QueryGetResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Get(request: QueryGetRequest): Promise<QueryGetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
