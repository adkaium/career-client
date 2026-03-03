import React, { use } from 'react';
import { AuthContexts } from '../contexts/AuthContexts/AuthContexts';

const useAuth = () => {
    const useAuth = use(AuthContexts);
    return useAuth;
};

export default useAuth;