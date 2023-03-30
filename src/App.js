import "./App.css";
import Header from "./components/header";
import Todolist from "./components/todolist";
import Footer from "./components/footer";
function App() {
  return (
    <section className="todo-app">
      <Header />
      <Todolist />
      <Footer />
    </section>
  );
}

export default App;
