import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Search from '../components/Search'
import Address from '../components/Cep'
import Providers from "../providers/index";

describe("Search Flux", () => {
  it("should be able to make a search", async () => {
    render(
      <Providers>
        <Search />
        <Address />
      </Providers>
    );
    const cepField = screen.getByPlaceholderText("Insira o CEP")
    const buttonElement = screen.getByText("Buscar pelo CEP")
    fireEvent.change(cepField, { target: { value: '87010340' } })
    fireEvent.click(buttonElement)

    const rua = await screen.findByDisplayValue("Rua Fernandes Vieira")

    await waitFor(() => {
      expect(rua).toBeInTheDocument()
    })

  })
});