/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "vinhphuctadang.setget.setget";
const baseMsgSet = { creator: "", x: "" };
export const MsgSet = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.x !== "") {
            writer.uint32(18).string(message.x);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSet };
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
    fromJSON(object) {
        const message = { ...baseMsgSet };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.x !== undefined && object.x !== null) {
            message.x = String(object.x);
        }
        else {
            message.x = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.x !== undefined && (obj.x = message.x);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSet };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.x !== undefined && object.x !== null) {
            message.x = object.x;
        }
        else {
            message.x = "";
        }
        return message;
    },
};
const baseMsgSetResponse = { result: "" };
export const MsgSetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgSetResponse };
        if (object.result !== undefined && object.result !== null) {
            message.result = String(object.result);
        }
        else {
            message.result = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetResponse };
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = "";
        }
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Set(request) {
        const data = MsgSet.encode(request).finish();
        const promise = this.rpc.request("vinhphuctadang.setget.setget.Msg", "Set", data);
        return promise.then((data) => MsgSetResponse.decode(new Reader(data)));
    }
}
