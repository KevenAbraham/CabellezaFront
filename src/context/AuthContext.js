import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        const storedUserData = localStorage.getItem('userData') || sessionStorage.getItem('userData');

        if (token && storedUserData) {
            try {
                const parsedUserData = JSON.parse(storedUserData);
                setIsAuthenticated(true);
                setUserData(parsedUserData);
                console.log("salvando os dados" + storedUserData)
            } catch (error) {
                console.error("Erro ao parsear userData:", error);
                localStorage.removeItem('userData');
                sessionStorage.removeItem('userData');
                setIsAuthenticated(false);
                setUserData(null);
            }
        } else {
            setIsAuthenticated(false);
            setUserData(null);
        }
    }, []);

    const login = (data, rememberMe) => {
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem('authToken', data.token);
        storage.setItem('userData', JSON.stringify(data)); // Armazena o objeto completo
    
        setIsAuthenticated(true);
        setUserData(data); // Define todos os dados do usuário no estado
    };
    

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userData');
        setIsAuthenticated(false);
        setUserData(null);
    };

    const updateUserData = (updatedData) => {
        setUserData(updatedData);
        const storage = localStorage.getItem('authToken') ? localStorage : sessionStorage;
        storage.setItem('userData', JSON.stringify(updatedData));
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userData, login, logout, updateUserData }}>
            {children}
        </AuthContext.Provider>
    );
};
