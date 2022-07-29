import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../components/Search'

describe("Button Search", () => {

  test("should be able to render an button", () => {
    render(<Search />);
    const buttonElement = expect(screen.getByText("Buscar pelo CEP"))
    expect(buttonElement).toBeTruthy();
  })
  
});