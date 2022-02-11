package setget_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/vinhphuctadang/setget/testutil/keeper"
	"github.com/vinhphuctadang/setget/testutil/nullify"
	"github.com/vinhphuctadang/setget/x/setget"
	"github.com/vinhphuctadang/setget/x/setget/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SetgetKeeper(t)
	setget.InitGenesis(ctx, *k, genesisState)
	got := setget.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
