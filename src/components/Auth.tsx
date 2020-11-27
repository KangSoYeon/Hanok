import React, {useEffect, useState, createContext} from 'react';
import app from "./base"

export const AuthContext = createContext< boolean| undefined>(undefined);
