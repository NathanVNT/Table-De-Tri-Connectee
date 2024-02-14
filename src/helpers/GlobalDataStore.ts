import create from 'zustand';

interface DataDechets {
    emballage: number;
    pain: number;
    alimentaire: number;
}

interface DataDechetBrut {
    totalJour: number | 0;
    totalMois: number;
    totalAnnee: number;
    total: number;
}



interface DechetsStore {
    dechetsData: DataDechets | null;
    setDechetsData: (data: DataDechets | null) => void;
}

interface DechetBrutStore {
    totalBrutData: DataDechetBrut | null;
    setTotalBrut: (data: DataDechetBrut | null) => void;
}
interface DataMois {
    jour_du_mois: number;
    total_dujour_dumois: number;
}

interface DataMoisStore {
    moisData: DataMois[];
    setMoisData: (data: DataMois[]) => void;
}
export const useMoisDataStore = create<DataMoisStore>((set) => ({
    moisData: [],
    setMoisData: (data) => set({ moisData: data }),
}));

interface DataSemaine {
    jour: string;
    total_journalier: number;
}

interface DataSemaineStore {
    semaineData: DataSemaine[];
    setDataSemaine: (data: DataSemaine[]) => void;
}

export const useSemaineDataStore = create<DataSemaineStore>((set) => ({
    semaineData: [],
    setDataSemaine: (data) => set({ semaineData: data }),
}));
export const useDechetsStore = create<DechetsStore>((set) => ({
    dechetsData: null,
    setDechetsData: (data) => set({ dechetsData: data }),
}));

export const useTotalBrut = create<DechetBrutStore>((set) => ({
    totalBrutData: null,
    setTotalBrut: (data) => set({ totalBrutData: data }),
}));
