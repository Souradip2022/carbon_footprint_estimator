import {Context, createContext, useContext} from "react";

const context: Context<any> = createContext({
  data: {},
  route: ""
});

export const ContextProvider = context.Provider;

export default function useApp(){
  return useContext(context);
}