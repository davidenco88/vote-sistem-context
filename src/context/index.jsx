import { createContext, useReducer, useContext } from "react";
import { INCREMENT, SET_SHOW_RESULTS } from "./actionTypes";

const AppContext = createContext();

const initialState = {
  showResultsAs: 'totalVotes',
  totalVotes: 0,
  candidates: [
    {
      id: 1,
      name: 'DAVID',
      votes: 0,
      percentage: 0,
    },
    {
      id: 2,
      name: 'ANDRES',
      votes: 0,
      percentage: 0,
    },
    {
      id: 3,
      name: 'FEDERICO',
      votes: 0,
      percentage: 0,
    },
  ]
}

function reducer(state, action) {

  switch (action.type) {

    //Accion que maneja el incremento de cada candidato en valor y porcentaje, y el total global.
    case INCREMENT: {

      const newTotalVotes = state.totalVotes + 1;

      const newCandidates = state.candidates.map((candidate) => {
        if (action.payload === candidate.id) {
          candidate.votes = candidate.votes + 1;
          candidate.percentage = (candidate.votes / newTotalVotes) * 100;
        } else {
          candidate.percentage = (candidate.votes / newTotalVotes) * 100;
        }

        return candidate;
      })

      const newState = { ...state, candidates: newCandidates, totalVotes: newTotalVotes }

      return newState;
    }


    //Accion que maneja la forma en que se muestran los votos --Porcentaje -- Valor
    case SET_SHOW_RESULTS: {
      const newState = { ...state, showResultsAs: action.payload }

      return newState;
    }

    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }

  }

}

export function AppProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)

  const contextState = { state, dispatch }

  return (
    <AppContext.Provider value={contextState}>
      {children}
    </AppContext.Provider>
  )
}


export function useAppState() {
  const appContextState = useContext(AppContext);

  if (appContextState === undefined) {
    throw new Error('useState must be used within a AppProvider');
  }

  return appContextState;
}