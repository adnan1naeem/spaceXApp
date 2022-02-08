import { persistCombineReducers, persistReducer } from "redux-persist";
import storage from '@react-native-community/async-storage';

import app from "./app";

const config = {
    key: "root",
    storage,
    blacklist: [
        "app",
        "user",
        "Products",
        "carts",
        "payment",
        "country"
    ],
};


const appPersistConfig = {
    key: "app",
    storage,
    blacklist: ["isOpenSidemenu"],
};


export default persistCombineReducers(config, {
    app: persistReducer(appPersistConfig, app),
});
