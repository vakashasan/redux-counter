const INITIALSTATE = {
  globalcounter: 0,
};

const ReducerCounter = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return {
        globalcounter: ++state.globalcounter,
      };
    case "MINUS_COUNTER":
      return {
        globalcounter: --state.globalcounter,
      };
      default :
      return {
        ...state
      }
      
  }
};

export {ReducerCounter}
