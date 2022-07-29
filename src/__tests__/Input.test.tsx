import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../components/Search'

describe("Input Search", () => {
  test("should be able to render an input", () => {
    render(<Search />);
    const inputElement = expect(screen.getByPlaceholderText("Insira o CEP"))
    expect(inputElement).toBeTruthy();
  })
});