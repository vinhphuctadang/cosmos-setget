package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/vinhphuctadang/setget/x/setget/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Get(goCtx context.Context, req *types.QueryGetRequest) (*types.QueryGetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx
	kv := ctx.KVStore(k.storeKey)
	value := kv.Get([]byte("mainKey"))
	var valueToGet types.Value
	k.cdc.MustUnmarshal(value, &valueToGet)

	return &types.QueryGetResponse{
		Value: valueToGet.Value,
	}, nil
}
