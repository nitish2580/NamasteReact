import { createContext } from "react";

const UserContext = createContext(
    {user:{
    name: "Dummy name",
    email:"Dummy@gmail.com"
}})
UserContext.displayName="UserContext"

export default UserContext;