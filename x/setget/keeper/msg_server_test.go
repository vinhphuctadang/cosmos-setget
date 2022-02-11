package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/vinhphuctadang/setget/testutil/keeper"
	"github.com/vinhphuctadang/setget/x/setget/keeper"
	"github.com/vinhphuctadang/setget/x/setget/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.SetgetKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
