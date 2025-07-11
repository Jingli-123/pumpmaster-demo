import axios from 'axios';

export interface PumpData {
  pumpData: string[];
}

export const getPumpDataApi = async ():Promise<PumpData | undefined> => {
  try {
    const response = await axios.get<PumpData>('/api/pumpData');
    return response?.data;
  } catch (error) {
    console.log('Get pump data failed', error);
  }
};
