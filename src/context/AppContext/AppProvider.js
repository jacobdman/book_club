import React, { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
// Hooks
import { useUser } from "hooks/useUser";
// Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Utils
import isEqual from "lodash/isEqual";
// Services
import userAuthAccountLookupService from "services/userAuthAccountLookup/userAuthAccountLookup.service";

const AppProvider = ({ children }) => {
  // ******************STATE VALUES**********************
  const auth = getAuth();

  // ******************EFFECTS/REACTIONS**********************

  // ******************COMPUTED VALUES**********************

  // ******************UTILITY FUNCTIONS**********************

  // ******************LOAD FUNCTIONS**********************

  // ******************EXPORTS**********************
  return (
    <AppContext.Provider
      value={
        {
          // state
          // setters
          // computed
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
