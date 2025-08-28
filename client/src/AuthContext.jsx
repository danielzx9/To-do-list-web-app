import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(() => localStorage.getItem("token") || "");
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setToken("");
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("token");
    };

    useEffect(() => {
        if(token){
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Token inválido:", error);
                logout();
            }
        } else {
            setIsAuthenticated(false);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{token, user, isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

