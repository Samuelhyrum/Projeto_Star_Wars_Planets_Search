import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData'
import userEvent from '@testing-library/user-event';

describe('Testando Aplicação', () => {
  test('I am your test', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData)
    }),
    render(<App />)

    expect(screen.getAllByRole('row')).toHaveLength(1);

    const input = screen.getByTestId('name-filter')
    const table = screen.getByTestId('table')
    const name = screen.getByText('Name')
    expect(input).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
  it('Test Input FilterByName', async() => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData)
    }),
    render(<App />)
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))

    const input = screen.getByTestId("name-filter");
    expect(input).toBeInTheDocument();

    userEvent.type(input,'t');
    expect(screen.getAllByRole('row')).toHaveLength(4);


  })
  it('Testes de multipĺos filtros', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });

    render(<App/>)

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))

    const column = screen.getByTestId('column-filter')
    expect(column).toHaveValue('population');
    const comparison= screen.getByTestId('comparison-filter');
    expect(comparison).toHaveValue('maior que');
    const value = screen.getByTestId('value-filter');
    expect(value).toBeInTheDocument();

    userEvent.selectOptions(column, 'diameter');
    userEvent.selectOptions(comparison, 'menor que');
    userEvent.clear(value)
    userEvent.type(value, '8900');

    userEvent.click(screen.getByRole('button', { name: 'Filtrar' }))
})
})