// select dom elements
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");

// action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Initial State
const initialState = {
  value: 0,
};

// Create Reducer
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      value: state.value - 1,
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
  store.dispatch({
    type: INCREMENT,
  });
});

decrementElement.addEventListener("click", () => {
  store.dispatch({
    type: DECREMENT,
  });
});
