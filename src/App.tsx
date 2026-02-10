import goalsImg from "./assets/goals.jpg";
import Header from "./assets/components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./assets/components/CourseGoalList.tsx";
import NewGoal from "./assets/components/NewGoal.tsx";

export default function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalProps = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleRemoveGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleRemoveGoal} />
    </main>
  );
}

export type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
};
