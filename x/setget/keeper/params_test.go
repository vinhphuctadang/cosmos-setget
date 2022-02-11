package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/vinhphuctadang/setget/testutil/keeper"
	"github.com/vinhphuctadang/setget/x/setget/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.SetgetKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
