import './App.css';
// import axios from "axios";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import NoteForm, { action as createNoteAction } from "./routes/noteform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "new",
        element: <NoteForm />,
        action: createNoteAction
      }
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
    );
}
