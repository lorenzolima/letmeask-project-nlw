import { createContext, ReactNode } from 'react';

type User = {
    id: string,
    name: string,
    avatar: string;
}
type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
    sessionDisconnect: () => Promise<void>;
}
type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props) {
    return(
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}