export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>{percentage === 100 ? "You got everything! You're ready to go!" : `You have ${numItems} ${numItems === 1 ? "item" : "items"} on your list, and you already packed ${packedItems} (${percentage}%)`}</em>
    </footer>
  );
}
