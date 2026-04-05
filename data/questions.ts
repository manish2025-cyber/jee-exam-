export interface Question {
  id: number;
  subject: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export const mockQuestions: Question[] = [
  {
    id: 1,
    subject: "Mathematics",
    text: "Find the value of $\\lim_{x \\to 0} \\frac{\\sin x}{x}$.",
    options: ["0", "1", "-1", "Infinite"],
    correctAnswer: 1,
  },
  {
    id: 2,
    subject: "Physics",
    text: "What is the dimensional formula for Gravitational Constant (G)?",
    options: ["[M⁻¹L³T⁻²]", "[ML²T⁻²]", "[M⁻¹L²T⁻¹]", "[ML³T⁻²]"],
    correctAnswer: 0,
  },
  {
    id: 3,
    subject: "Mathematics",
    text: "If $f(x) = x^2$, find $f'(x)$.",
    options: ["x", "2x", "x^3", "2"],
    correctAnswer: 1,
  },
];
