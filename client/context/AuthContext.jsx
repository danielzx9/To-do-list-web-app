import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(() => localStorage.getItem("token")||"");
    const [user, setUser] = useState(null);

    const login = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
    };

    const logout = () => {
        setToken("");
        setUser(null);
        localStorage.removeItem("token");
    };

    useEffect(() => {
        if(token){
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{token, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

