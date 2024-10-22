import './App.css'
import Noticia from './components/Noticia';

function App() {
  const mockupData = [{
    id: 1,
    title: "Título 1",
    date: "19 de octubre de 2024",
    likes: 37,
    avatarUrl: "\\imagenes\\avatar01.png",
    avatarAlt: "Primer avatar",
    bgUrl: "\\imagenes\\sky.jpg",
    bgAlt: "Cielo",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero adipisci consectetur cupiditate accusamus optio tenetur sed necessitatibus? Praesentium ad eius sunt facere eum distinctio aliquid temporibus quo ipsum consectetur."
  },{
    id: 2,
    title: "Título 2",
    date: "19 de octubre de 2024",
    likes: 76,
    avatarUrl: "\\imagenes\\avatar02.png",
    avatarAlt: "Segundo avatar",
    bgUrl: "\\imagenes\\sea.jpg",
    bgAlt: "Mar",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero adipisci consectetur cupiditate accusamus optio tenetur sed necessitatibus? Praesentium ad eius sunt facere eum distinctio aliquid temporibus quo ipsum consectetur."
  },{
    id: 3,
    title: "Título 3",
    date: "19 de octubre de 2024",
    likes: 89,
    avatarUrl: "\\imagenes\\avatar03.png",
    avatarAlt: "Tercer avatar",
    bgUrl: "\\imagenes\\tux.jpg",
    bgAlt: "We love penguins",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero adipisci consectetur cupiditate accusamus optio tenetur sed necessitatibus? Praesentium ad eius sunt facere eum distinctio aliquid temporibus quo ipsum consectetur."
  },{
    id: 4,
    title: "Título 4",
    date: "19 de octubre de 2024",
    likes: 765,
    avatarUrl: "\\imagenes\\avatar04.png",
    avatarAlt: "Cuarto avatar",
    bgUrl: "\\imagenes\\mario.jpg",
    bgAlt: "It's a me, Mario",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero adipisci consectetur cupiditate accusamus optio tenetur sed necessitatibus? Praesentium ad eius sunt facere eum distinctio aliquid temporibus quo ipsum consectetur."
  }];
  return (
    <>
    <>
    {mockupData.map((data) => (
      <Noticia
      key={data.id}
      title = {data.title}
      date = {data.date}
      likes = {data.likes}
      avatarUrl={data.avatarUrl}
      avatarAlt={data.avatarAlt}
      bgUrl={data.bgUrl}
      bgAlt={data.bgAlt}
      message = {data.message}
      />
    ))}
    </>
    </>
  )
}

export default App
