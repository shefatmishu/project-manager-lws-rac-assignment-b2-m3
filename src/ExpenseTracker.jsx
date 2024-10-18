import { useState } from "react";
import Content from "./components/Content";
import SubmissionForm from "./components/SubmissionForm";

export default function ExpenseTracker() {
  const defaultFormData = {
    id: null,
    type: "expense",
    category: "Education",
    amount: 0,
    data: null,
  };
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [formData, setFormData] = useState(defaultFormData);

  const handleSubmit = (data) => {
    let existing = data.type === "expense" ? [...expenses] : [...incomes];
    if (data.type === "expense") {
      // let existing = [...expenses];
      if (data.id) {
        let eData = existing.find((a) => a.id === data.id);
        let ind = existing.indexOf(eData);
        existing[ind] = data;
        setExpenses(existing);
      } else {
        data["id"] = crypto.randomUUID();
        setExpenses([...existing, data]);
      }
    } else {
      //let existing = [...incomes];
      if (data.id) {
        let eData = existing.find((a) => a.id === data.id);
        let ind = existing.indexOf(eData);
        existing[ind] = data;
        setIncomes(existing);
      } else {
        data["id"] = crypto.randomUUID();
        setIncomes([...existing, data]);
      }
    }
    setFormData(defaultFormData);
  };

  const handleIncomeDelete = (id) => {
    setIncomes([...incomes].filter((a) => a.id !== id));
  };

  const handleExpenseDelete = (id) => {
    setExpenses([...expenses].filter((a) => a.id === id));
  };

  const onEdit = (id, type) => {
    let item = null;
    if (type === "income") {
      item = incomes.find((a) => a.id === id);
    } else {
      item = expenses.find((a) => a.id === id);
    }
    if (item) setFormData(item);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SubmissionForm
        expenses={expenses}
        formData={formData}
        setFormData={setFormData}
        setExpenses={setExpenses}
        onSave={(data) => handleSubmit(data)}
      />
      <Content
        expenses={expenses}
        incomes={incomes}
        handleIncomeDelete={handleIncomeDelete}
        handleExpenseDelete={handleExpenseDelete}
        onEdit={onEdit}
      />
    </section>
  );
}
