import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Search from '../components/Search'

describe("Search Flux", () => {
  it("should be able to make a search", () => {
    render(<Search />);
    const cepField = expect(screen.getByPlaceholderText("Insira o CEP"))
    const buttonElement = expect(screen.getByText("Buscar pelo CEP"))
    fireEvent.change(cepField, { target: { value: '87010340' } })
    fireEvent.click(buttonElement)


    expect(cepField).toHaveValue('87010340')


  })
});