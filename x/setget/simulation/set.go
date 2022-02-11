package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/vinhphuctadang/setget/x/setget/keeper"
	"github.com/vinhphuctadang/setget/x/setget/types"
)

func SimulateMsgSet(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSet{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the Set simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "Set simulation not implemented"), nil, nil
	}
}
