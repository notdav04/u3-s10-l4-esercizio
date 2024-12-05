import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import fantasy from "../data/fantasy.json";
import BookList from "../components/BookList";
import CommentArea from "../components/CommentArea";
import App from "../App";
import SingleBook from "../components/SingleBook";

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

// describe("verifica che vengano create tante card quanti sono i libri  in fantasy", () => {
//   it("verifica n°card", async () => {
//     render(<BookList />);
//     const cards = await screen.queryAllByRole("img");
//     expect(cards.length).toBe(fantasy.length);
//   });
// });

//3
describe("verifica che il componente CommentArea venga montato correttamente ", () => {
  it("verifica che il componente addcomment venga renderizzato", () => {
    render(<CommentArea />);
    const addcommentbutton = screen.getByText("Invia");
    expect(addcommentbutton).toBeInTheDocument();
  });
  // it("verifica che venga montato il componente commentlist", async () => {
  //   render(<App />);
  //   const commentlist = await screen.getByRole("ul");
  //   expect(commentlist).toBeInTheDocument();
  // });
  // it("verifica che non ci siano errori", () => {});
});

//4
describe("verifica che funzioni correttamente la ricerca dell input", () => {
  it("verifica funzionalità di ricerca", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Cerca un libro");
    fireEvent.change(input, { target: { value: "dragon" } });
    const filteredElements = await screen.findAllByRole("img");
    expect(filteredElements).toHaveLength(8);
  });
});

//5
describe("verifica che cliccando su un libro il suo bordo diventi rosso", () => {
  it("verifica il cambio colore del bordo alla pressione del libro", async () => {
    render(<App />);
    const card = screen.query("card");
    fireEvent.click(card);
    expect(card.style.borderColor).toBe("red");
  });
});
