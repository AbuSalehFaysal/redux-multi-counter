// select dom elements
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");

// action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// Initial State
const initialState = {
  value: 0,
};

// Create Reducer
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

// Store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterElement.innerText = state.value.toString();
};

render();

store.subscribe(render);

// button event listener
incrementElement.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementElement.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
