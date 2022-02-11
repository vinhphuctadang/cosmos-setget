/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "vinhphuctadang.setget.setget";

export interface MsgSet {
  creator: string;
  x: string;
}

export interface MsgSetResponse {
  result: string;
}

const baseMsgSet: object = { creator: "", x: "" };

export const MsgSet = {
  encode(message: MsgSet, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.x !== "") {
      writer.uint32(18).string(message.x);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSet } as MsgSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.x = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSet {
    const message = { ...baseMsgSet } as MsgSet;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = String(object.x);
    } else {
      message.x = "";
    }
    return message;
  },

  toJSON(message: MsgSet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.x !== undefined && (obj.x = message.x);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSet>): MsgSet {
    const message = { ...baseMsgSet } as MsgSet;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = object.x;
    } else {
      message.x = "";
    }
    return message;
  },
};

const baseMsgSetResponse: object = { result: "" };

export const MsgSetResponse = {
  encode(message: MsgSetResponse, writer: Writer = Writer.create()): Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetResponse } as MsgSetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetResponse {
    const message = { ...baseMsgSetResponse } as MsgSetResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = String(object.result);
    } else {
      message.result = "";
    }
    return message;
  },

  toJSON(message: MsgSetResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetResponse>): MsgSetResponse {
    const message = { ...baseMsgSetResponse } as MsgSetResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Set(request: MsgSet): Promise<MsgSetResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Set(request: MsgSet): Promise<MsgSetResponse> {
    const data = MsgSet.encode(request).finish();
    const promise = this.rpc.request(
      "vinhphuctadang.setget.setget.Msg",
      "Set",
      data
    );
    return promise.then((data) => MsgSetResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
