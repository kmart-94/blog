import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
  //reducer is the reducer function differentiating this reducer from others
  //actions is an object containing all the functions that in turn call dispatch with certain action types
  //initialState is the initial State of our object, in the case of blog posts it is an empty array.
  const Context = React.createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions === {addBlogPost: (dispatch) => return () => {}}

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value = {{state: state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  }

  return {Context, Provider};
};
