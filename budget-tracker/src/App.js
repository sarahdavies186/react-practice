import { useState } from "react";

export default function App() {
  return (
    <>
      <BudgetTracker />
    </>
  );
}

function BudgetTracker() {
  const [totalBudget, setTotalBudget] = useState("");
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleDeleteAll() {
    setItems([]);
  }

  function budgetRemaining() {
    const totalSpent = items.reduce((total, item) => {
      return total + (Number(item.cost) || 0);
    }, 0);

    return (Number(totalBudget) || 0) - totalSpent;
  }

  return (
    <div className="body-wrapper">
      <h2>BUDGET LIFE 😌</h2>
      <BudgetForm totalBudget={totalBudget} onSetTotalBudget={setTotalBudget} onAddItem={handleAddItem} />
      <TotalBudgetCalculator totalBudget={totalBudget} budgetRemaining={budgetRemaining} />
      <BudgetWrapper items={items} onDeleteItem={handleDeleteItem} />
      <ClearButton onDeleteAllItems={handleDeleteAll}/>
    </div>
  );
}

function BudgetForm({ totalBudget, onSetTotalBudget, onAddItem }) {
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("Bills");

  function handleSubmit(e) {
    e.preventDefault();

    if (!item || !cost) return;

    const newItem = { id: crypto.randomUUID(), item, cost, category };
    onAddItem(newItem);

    setItem("");
    setCost("");
    setCategory("Bills");
  }

  return (
    <>
      <div className="budget-input">
        <label>What is your total monthly budget?</label>
        <input
          type="text"
          placeholder="Input budget"
          value={totalBudget}
          onChange={(e) => {
            onSetTotalBudget(e.target.value);
          }}
        ></input>
        <span className="budget-message">{totalBudget === "" ? "" : totalBudget > 0 && totalBudget < 2001 ? "Wow, that's going to be a struggle" : totalBudget > 2000 ? "You might survive the month" : ""}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <label>What are your planned outgoings?</label>
        <input type="text" placeholder="Add budget item" value={item} onChange={(e) => setItem(e.target.value)}></input>
        <input type="number" placeholder="Add budget cost" value={cost} onChange={(e) => setCost(e.target.value)}></input>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Bills</option>
          <option>Expenses</option>
          <option>Savings</option>
        </select>
        <button>Add</button>
      </form>
    </>
  );
}

function BudgetWrapper({ items, onDeleteItem }) {
  const categories = Array.from(new Set(items.map((item) => item.category)));

  return (
    <div className="budget-wrapper">
      {categories.map((category) => {
        const categoryItems = items.filter((item) => item.category === category);
        const totalCost = categoryItems.reduce((total, item) => total + Number(item.cost), 0);

        return (
          <div key={category} className={category.toLowerCase()}>
            <div className="category-title">{category.toUpperCase()}</div>
            <BudgetList items={categoryItems} onDeleteItem={onDeleteItem} />
            <div className="category-total">Total: £{totalCost.toFixed(2)}</div>
          </div>
        );
      })}
    </div>
  );
}

function BudgetList({ items, onDeleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <BudgetItem item={item} key={item.id} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
  );
}

function BudgetItem({ item, onDeleteItem }) {
  return (
    <li>
      <span className="item-name">{item.item}</span>
      <span>£{item.cost}</span>
      <span className="delete-item" onClick={() => onDeleteItem(item.id)}>
        𝗫
      </span>
    </li>
  );
}

function TotalBudgetCalculator({ totalBudget, budgetRemaining }) {
  return (
    <div className="total-budget-wrapper">
      <div className="total-budget">
        Your total monthly budget:
        <div className="total-budget-amount">£{totalBudget}</div>
      </div>
      <div className="total-remaining">
        Your budget remaining:
        <div className="total-remaining-amount">£{budgetRemaining()}</div>
      </div>
    </div>
  );
}

function ClearButton({ onDeleteAllItems }) {
  return (
    <button onClick={onDeleteAllItems}>Clear all</button>
  )
}

