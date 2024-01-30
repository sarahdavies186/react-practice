import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Profile";
import Product from "./Product";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Profile name="Sarah" job="Frontend Developer" birthdate="February" />
      <Product
        name="Air Fryer K2000"
        description="The best air fryer to fry all things, even Mars bars"
        price={2000}
      />
      <Counter />
    </>
  );
}

export default App;
