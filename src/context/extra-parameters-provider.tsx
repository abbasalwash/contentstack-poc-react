import React, { createContext, useEffect, useState } from "react";
import { Props } from "./types";

const ExtraParametersContext = createContext<object | null>(null);

const ExtraParametersProvider = (props: Props) => {
  const parameter = {...props};
  delete parameter.children;

  const [extraParameter, setExtraParameter] = useState(parameter);

  return (
    <ExtraParametersContext.Provider value={extraParameter}>
      {props.children}
    </ExtraParametersContext.Provider>
  );
};

const useExtraParameterCtx = () => React.useContext(ExtraParametersContext);

export { ExtraParametersProvider, useExtraParameterCtx };
