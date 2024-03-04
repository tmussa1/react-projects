import "./App.css";
import MemeCard from "./MemeCard";
import { memeData } from "./MemeData";

function App() {
  return (
    <div className="bg-slate-500">
      <div className="flex justify-center p-5 border-orange-950">
        <h1>
          <b>Your Favorite Programming Memes</b>
        </h1>
      </div>
      <div className="flex flex-wrap">
        {memeData?.map((meme) => (
          <MemeCard
            key={meme.id}
            imageUrl={meme.imageUrl}
            title={meme.title}
            description={meme.description}
            id={meme.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
