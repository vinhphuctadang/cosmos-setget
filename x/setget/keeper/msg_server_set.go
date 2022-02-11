package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/vinhphuctadang/setget/x/setget/types"
)

func (k msgServer) Set(goCtx context.Context, msg *types.MsgSet) (*types.MsgSetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	key := []byte("mainKey")
	value := &types.Value{
		Value: msg.X,
	}
	valueToSet := k.cdc.MustMarshal(value)
	kv := ctx.KVStore(k.storeKey)
	kv.Set(key, valueToSet)

	return &types.MsgSetResponse{}, nil
}
