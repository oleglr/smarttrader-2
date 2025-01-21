import { PropsWithChildren, createContext, useState, Dispatch, SetStateAction } from "react";

// Типы для контекстов
type AuthContextType = {
  test: boolean;
};

type AuthDispatcherType = {
  setTest: Dispatch<SetStateAction<boolean>>;
};

// Создание контекстов с типизацией
export const AuthContext = createContext<AuthContextType | null>(null);
export const AuthDispatcher = createContext<AuthDispatcherType | null>(null);

const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [test, setTest] = useState(false);

  return (
    <AuthContext.Provider value={{ test }}>
      <AuthDispatcher.Provider value={{ setTest }}>
        {children}
      </AuthDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
