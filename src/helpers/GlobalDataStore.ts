import create from 'zustand';

// Interfaces
export interface Dechets {
    emballage: number;
    pain: number;
    alimentaire: number;
}

export interface DechetBrut {
    totalJour: number;
    totalMois: number;
    totalAnnee: number;
    total: number;
}

export interface Mois {
    jour: number;
    totalDuJourDuMois: number;
}

export interface Semaine {
    jour: string;
    totalJournalier: number;
}

export interface DechetsUtilisateur {
    emballage: number;
    pain: number;
    alimentaire: number;
}

export interface DechetBrutUtilisateur {
    totalJour: number;
    totalMois: number;
    totalAnnee: number;
    total: number;
}

export interface MoisUtilisateur {
    jour: number;
    totalDuJourDuMois: number;
}

export interface SemaineUtilisateur {
    jour: string;
    totalJournalier: number;
}

// Token
export interface Token {
    expire: number;
    token: string | null;
}

// User
export interface User {
    username: string;
}

// Stores
export interface DechetsStore {
    dechetsData: Dechets | null;
    setDechetsData: (data: Dechets | null) => void;
}

export interface DechetBrutStore {
    totalBrutData: DechetBrut | null;
    setTotalBrut: (data: DechetBrut | null) => void;
}

export interface MoisStore {
    moisData: Mois[];
    setMoisData: (data: Mois[]) => void;
}

export interface SemaineStore {
    semaineData: Semaine[];
    setDataSemaine: (data: Semaine[]) => void;
}

export interface DechetsUtilisateurStore {
    dechetsData: DechetsUtilisateur | null;
    setDechetsData: (data: DechetsUtilisateur | null) => void;
}

export interface DechetBrutUtilisateurStore {
    totalBrutData: DechetBrutUtilisateur | null;
    setTotalBrut: (data: DechetBrutUtilisateur | null) => void;
}

export interface MoisUtilisateurStore {
    moisData: MoisUtilisateur[];
    setMoisData: (data: MoisUtilisateur[]) => void;
}

export interface SemaineUtilisateurStore {
    semaineData: SemaineUtilisateur[];
    setDataSemaine: (data: SemaineUtilisateur[]) => void;
}

export interface TokenStore {
    tokenData: Token;
    setTokenData: (data: Token) => void;
    logout: () => void; // Action de déconnexion
}

export interface UserStore {
    userData: User | null;
    setUserData: (data: User | null) => void;
}

export interface ApiStateStore {
    apiState: 'idle' | 'loading' | 'error';
    setApiState: (state: 'idle' | 'loading' | 'error') => void;
}

// Création du Datastore
export const useTokenStore = create<TokenStore>((set) => ({
    tokenData: { expire: 0, token: null },
    setTokenData: (data) => set({ tokenData: data }),
    logout: () => {
        // Vous pouvez ajouter le code de déconnexion ici si nécessaire
        console.log('User logged out');
    },
}));

// Stores créés avec Zustand
export const useDechetsStore = create<DechetsStore>((set) => ({
    dechetsData: null,
    setDechetsData: (data) => set({ dechetsData: data }),
}));

export const useTotalBrut = create<DechetBrutStore>((set) => ({
    totalBrutData: null,
    setTotalBrut: (data) => set({ totalBrutData: data }),
}));

export const useMoisDataStore = create<MoisStore>((set) => ({
    moisData: [],
    setMoisData: (data) => set({ moisData: data }),
}));

export const useSemaineDataStore = create<SemaineStore>((set) => ({
    semaineData: [],
    setDataSemaine: (data) => set({ semaineData: data }),
}));

export const useDechetsUtilisateurStore = create<DechetsUtilisateurStore>((set) => ({
    dechetsData: null,
    setDechetsData: (data) => set({ dechetsData: data }),
}));

export const useTotalUtilisateurBrut = create<DechetBrutUtilisateurStore>((set) => ({
    totalBrutData: null,
    setTotalBrut: (data) => set({ totalBrutData: data }),
}));

export const useMoisDataUtilisateurStore = create<MoisUtilisateurStore>((set) => ({
    moisData: [],
    setMoisData: (data) => set({ moisData: data }),
}));

export const useSemaineDataUtilisateurStore = create<SemaineUtilisateurStore>((set) => ({
    semaineData: [],
    setDataSemaine: (data) => set({ semaineData: data }),
}));

export const useUserStore = create<UserStore>((set) => ({
    userData: null,
    setUserData: (data) => set({ userData: data }),
}));

export const useApiStateStore = create<ApiStateStore>((set) => ({
    apiState: 'idle',
    setApiState: (state) => set({ apiState: state }),
}));
