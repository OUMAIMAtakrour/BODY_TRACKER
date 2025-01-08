// import { Children, createContext, useContext, useState } from "react";
// import axios from "axios";
// interface AuthProps {
//   authState?: { token: string | null; authenticated: boolean | null };
//   onRegister?: (email: string, password: string) => Promise<any>;
//   onLogin?: (email: string, password: string) => Promise<any>;
//   onLogout?: () => Promise<any>;
// }
// const TOKEN_KEY = "my-jwt";
// export const API_URL = "https://api.developbetterapps.com";
// const AuthContext = createContext<AuthProps>({});
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
// export const AuthProvider = ({ children }: any) => {
//   const [authState, setAthState] = useState<{
//     token: string | null;
//     authenticated: boolean | null;
//   }>({
//     token: null,
//     authenticated: null,
//   });
//   const register =async(email:string,password:string)=>{
//     try{
//         return await axios.post(`${API_URL}/users`,{email,password})
//     }
//   }
//   const value = {};
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
