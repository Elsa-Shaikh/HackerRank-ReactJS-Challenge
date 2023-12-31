import './App.css';
import Articles from './component/Articles';
import Slider from './component/Slider';

function App() {
  const slides = [
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamental exercises."
    },
    {
        title: "First, 10 push-ups",
        text: "Do 10 reps. Remember about full range of motion. Don't rush"
    },
    {
        title: "Next, 20 squats",
        text: "Squats are important. Remember to keep your back straight."
    },
    {
        title: "Finally, 15 sit-ups",
        text: "Slightly bend your knees. Remember about full range of motion."
    },
    {
        title: "Great job!",
        text: "You made it, have a nice day and see you next time!"
    }
]
const articles = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24"
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23"
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22"
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-10-21"
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21"
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21"
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31"
  }
]
  return (
    <div className="App">
    <Slider slides={slides}/>
    <Articles articles={articles}/>
    </div>
  );
}

export default App;
