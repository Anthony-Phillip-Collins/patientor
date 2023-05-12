import { Container, Divider, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import { createContext, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Diagnosis, Patient } from '@patientor/shared/types';
import PatientListPage from './pages/PatientListPage';
import PatientPage from './pages/PatientPage';
import diagnosisService from './services/diagnosisService';
import patientService from './services/patientServices';

export interface AppContextValue {
  patients: Patient[];
  diagnoses: Diagnosis[];
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
}

export const AppContext = createContext<AppContextValue | null>(null);

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {
    const fetchPatientList = async () => {
      try {
        const p = await patientService.getAll();
        setPatients(p);
      } catch (error) {
        console.log('Something went wrong!', error);
      }
    };
    fetchPatientList();

    const fetchDiagnosis = async () => {
      try {
        const d = await diagnosisService.getAll();
        setDiagnoses(d);
      } catch (error) {
        console.log('Something went wrong!', error);
      }
    };

    fetchDiagnosis();
  }, []);

  return (
    <div className="App">
      <Router>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <AppContext.Provider value={{ patients, diagnoses, setPatients }}>
            <Container>
              <Typography
                variant="h3"
                component="h1"
                style={{
                  marginBottom: '0.5em',
                }}
              >
                Patientor
              </Typography>

              <Typography
                variant="h3"
                component="h1"
                style={{
                  marginBottom: '0.5em',
                }}
              >
                Bro
              </Typography>

              <Divider hidden />
              <Routes>
                <Route path="/" element={<PatientListPage />} />
                <Route path="patients/:id" element={<PatientPage />} />
              </Routes>
            </Container>
          </AppContext.Provider>
        </LocalizationProvider>
      </Router>
    </div>
  );
};

export default App;
