import type { Component } from "solid-js";

import dice from "./assets/dice.svg";
import pattern from "./assets/pattern.svg";

const App: Component = () => {
  return (
    <div class="bg-[#1f2632] min-h-screen flex justify-center items-center p-4">
      <main class="bg-[#323a49] rounded-2xl text-[#cee3e9] p-8 text-center space-y-8 relative pb-16 max-w-lg mx-auto">
        <h1 class="text-[#52ffa8] uppercase tracking-[4px] text-sm">
          Advice #123
        </h1>
        <p class="font-bold text-2xl leading-8">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>
        <img src={pattern} alt="" />
        <button
          class="bg-[#52ffa8] h-16 w-16 rounded-full absolute -bottom-8 left-0 right-0 mx-auto flex justify-center items-center"
          aria-label="Generate Random Advice"
        >
          <img class="text-white" src={dice} alt="" />
        </button>
      </main>
    </div>
  );
};

export default App;
