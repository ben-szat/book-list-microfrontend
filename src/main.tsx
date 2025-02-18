import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BookList from "./BookList";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookList />
  </StrictMode>
);
