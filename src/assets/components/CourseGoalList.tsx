import CourseGoal from "./CourseGoal.tsx";
import { CourseGoalProps } from "../../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { ReactNode } from "react";

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  let warningBox: ReactNode;

  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You have a lot of goals. You might want to consider.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

type CourseGoalListProps = {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
};
