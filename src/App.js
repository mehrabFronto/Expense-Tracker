import "./App.css";
import ExpenseApp from "./components/ExpenseApp/ExpenseApp";

const App = () => {
   return (
      <div className="app">
         <header>
            <h2>Expense Tracker</h2>
         </header>
         <ExpenseApp />
      </div>
   );
};

export default App;
