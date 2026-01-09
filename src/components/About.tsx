import { useEffect, useState } from "react";
import "../styles/About.css";

interface Item {
  id: number;
  title: string;
  body: string;
}
function About() {
  const [data, setData] = useState<Item[]>([]);
  const [visible, setVisible] = useState(12);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <div className="grid-container">
        {data.slice(0, visible).map(item => (
          <div className="grid-item" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setVisible(v => v + 12)}>
        Show more
      </button>
    </div>
  );
}

export default About;
