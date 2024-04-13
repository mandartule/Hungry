//this can be used anywhere in the app to get the user data

import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Default User",
});

export default UserContext;