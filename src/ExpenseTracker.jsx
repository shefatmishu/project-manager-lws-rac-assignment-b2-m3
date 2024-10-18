import { useState } from "react";
import Content from "./components/Content";
import SubmissionForm from "./components/SubmissionForm";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const handleSubmit = (data) => {
    if (data.type === "expense") {
      setExpenses([...expenses, data]);
    } else {
      setIncomes([...incomes, data]);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SubmissionForm
        expenses={expenses}
        setExpenses={setExpenses}
        onSave={(data) => handleSubmit(data)}
      />
      <Content expenses={expenses} incomes={incomes} />
    </section>
  );
}
