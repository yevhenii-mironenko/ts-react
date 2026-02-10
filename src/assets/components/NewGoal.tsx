import { FormEvent, useRef } from "react";

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    if (enteredGoal.length < 6) {
      alert("Enter more than 5 characters in goal field");
      return;
    }

    if (enteredSummary.length < 11) {
      alert("Enter more than 10 characters in goal fiel");
      return;
    }

    onAddGoal(enteredGoal, enteredSummary);

    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};
