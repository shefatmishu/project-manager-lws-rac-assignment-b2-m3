import ExpenseTracker from "./ExpenseTracker";
import Header from "./Header";

function App() {
  return (
    <body>
      <main>
        <Header />
        <div className="relative mx-auto mt-10 w-full max-w-7xl">
          <ExpenseTracker />
        </div>
      </main>
    </body>
  );
}

export default App;
