/* @refresh reload */
import { ErrorBoundary, render } from "solid-js/web";

import "./index.css";
import App from "./App";

render(
  () => (
    <ErrorBoundary
      fallback={
        <div
          class="min-h-screen min-w-screen bg-[#1f2632] text-red-400 grid place-content-center"
          role="alert"
        >
          Some unknown error occurred.
        </div>
      }
    >
      <App />
    </ErrorBoundary>
  ),
  document.getElementById("root") as HTMLElement
);
