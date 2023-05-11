import axios from 'axios';

import { apiBaseUrl } from '../constants';
import { Diagnosis } from '@patientor/shared/types';

const getAll = async () => {
  const { data } = await axios.get<Diagnosis[]>(`${apiBaseUrl}/diagnoses`);
  return data;
};

const diagnosisService = {
  getAll,
};

export default diagnosisService;
