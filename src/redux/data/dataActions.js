// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
        let wlSaleStart_A = await store
        .getState()
        .blockchain.smartContract.methods.wlSaleStart_A()
        .call();
        let wlSaleStart_B = await store
        .getState()
        .blockchain.smartContract.methods.wlSaleStart_B()
        .call();
        let saleStart = await store
        .getState()
        .blockchain.smartContract.methods.saleStart()
        .call();

        // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();

      dispatch(
        fetchDataSuccess({
          totalSupply,
          wlSaleStart_A,
          wlSaleStart_B,
          saleStart,
          // cost,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
