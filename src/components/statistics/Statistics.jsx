import { Section } from '../feeedback-section/Section';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total ? (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive feedback:{positivePercentage}%</li>
    </ul>
  ) : (
    <Section title="No feedback given" />
  );