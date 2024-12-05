import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import fantasy from "../data/fantasy.json";
import AllTheBooks from "../components/AllTheBooks";

describe("verifica il corretto montaggio del componente welcome", () => {
  it("verifica la presenza del titolo", () => {
    render(<Welcome />);
    const title = screen.getByText(/benvenuti in epibooks/i);
    expect(title).toBeInTheDocument();
  });
  it("verifica la presenza dell alert", () => {
    render(<Welcome />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
  });
});

describe("verifica che vengano create tante card quanti sono i libri  in fantasy", () => {
  it("verifica n°card", () => {
    render(<AllTheBooks />);
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(fantasy.length);
  });
});
