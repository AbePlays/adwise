import type { Component } from "solid-js";
import { createResource, createSignal } from "solid-js";

import { getAdviceById, getRandomAdvice } from "./service";
import { getRandomInt } from "./utils";
import dice from "./assets/dice.svg";
import pattern from "./assets/pattern.svg";

type Advice = {
	id: number;
	advice: string;
};

const App: Component = () => {
	const searchParams = new URLSearchParams(window.location.search);
	const id = parseInt(searchParams.get("id") || "1");

	const submitHandler = (e: Event) => {
		e.preventDefault();
		const newId = getRandomInt();
		setAdviceId(newId);
		window.history.replaceState(null, "", `?id=${newId}`);
	};

	const [adviceId, setAdviceId] = createSignal<number>(id);
	const [advice] = createResource<Advice, number>(
		adviceId,
		adviceId ? () => getAdviceById(adviceId()) : getRandomAdvice,
	);

	return (
		<div class="bg-[#1f2632] min-h-screen flex justify-center items-center p-4">
			<main class="bg-[#323a49] rounded-2xl text-[#cee3e9] p-8 text-center space-y-8 relative max-w-lg mx-auto">
				{!advice.loading && !advice()?.advice ? (
					<p class="text-red-400">
						Some error occured. Please try generating a new advice
					</p>
				) : (
					<>
						<h1 class="text-[#52ffa8] uppercase tracking-[4px] text-sm">
							Advice #{advice()?.id}
						</h1>
						<p class="font-bold text-2xl leading-8">"{advice()?.advice}"</p>
						<img src={pattern} alt="" />
					</>
				)}
				<form onSubmit={submitHandler}>
					<button
						aria-label="Generate Random Advice"
						class="bg-[#52ffa8] h-16 w-16 rounded-full absolute -bottom-8 left-0 right-0 mx-auto flex justify-center items-center"
						disabled={advice.loading}
						type="submit"
					>
						<img
							class={`${advice.loading ? "animate-spin" : ""}`.trim()}
							src={dice}
							alt=""
						/>
					</button>
				</form>
			</main>
		</div>
	);
};

export default App;
