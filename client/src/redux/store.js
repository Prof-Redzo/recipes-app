import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import recipeReducer from "./recipeSlice";
import feedbackReducer from "./feedbackSlice";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({ 
    recipes: recipeReducer,
    feedback: feedbackReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
   reducer: persistedReducer,
   devTools: process.env.NODE_ENV !== "production",
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
       },
     })
});

export const persistor = persistStore(Store);