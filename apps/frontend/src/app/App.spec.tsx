import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should "Patientor" as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Patientor/gi)).toBeTruthy();
  });

  //it should show the patiient list
  it('should show the patient list', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Patient list/gi)).toBeTruthy();
    expect(getByText(/Name/gi)).toBeTruthy();
    expect(getByText(/Gender/gi)).toBeTruthy();
    expect(getByText(/Occupation/gi)).toBeTruthy();
    expect(getByText(/Health Rating/gi)).toBeTruthy();
  });
});
