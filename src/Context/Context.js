import React, { useContext, useState } from "react";

const ProductsContext = React.createContext();

export const ContextProvider = ({ children }) => {

  const [currentActivity, setCurrentActivity] = useState();
  const [sidebar, setSidebar] = useState(false);
  const [modals, setModals] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [logout, setLogOut] = useState(false);
  const [learningSidebar, setLearningSidebar] = useState(false);
  const [language, setLanguage] = useState("English");
  const LanguageArray = [
    { name: "English", code: "en" },
    { name: "සිංහල", code: "si" },
  ];

  const showSidebar = () => {
    setSidebar((prev) => !sidebar);
    setShowLanguage(false);
  };

  const showModals = (title, url) => {
    setModals((prev) => !prev);
    setCurrentActivity({title, url});
  };

  const showLogOut = () => {
    setLogOut((prev) => !prev);
    setShowLanguage(false);
  };

  const showLanguageFunc = () => {
    setShowLanguage((prev) => !prev);
    setLogOut(false);
    setLearningSidebar(false);
    setSidebar(false);
  };

  const singleLanguage = (el) => {
    setLanguage(el);
    showLanguageFunc();
  };

  // end of tab details
  return (
    <ProductsContext.Provider
      value={{
        sidebar,
        showSidebar,
        modals,
        showModals,
        setModals,
        showLanguage,
        setShowLanguage,
        showLanguageFunc,
        currentActivity,
        setCurrentActivity,
        logout,
        setLogOut,
        showLogOut,
        learningSidebar,
        setLearningSidebar,
        language,
        setLanguage,
        LanguageArray,
        singleLanguage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useMainContext = () => {
  return useContext(ProductsContext);
};
