
import './App.css';
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js";
import Pusher from "pusher-js";
import React, { useEffect, useState } from 'react'
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  //cualquier dato que llegue a los endpoints los imprimirá por consola
  useEffect(() => {
    axios.get('/messages/sync')
    .then(response =>{
      setMessages(response.data);
    })
  }, [])
  //LINEAS DE CODIGO QUE PERMITEN INTERACTUAR FRONTEND Y BACKEND
  useEffect(() => {
    const pusher = new Pusher('6caaae193ccba24e5e6e', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });
    //esta funcion flecha solo refleja el mensaje reciente, en caso de que
    //hipoteticamente tengamos 50 personas y no este mandando a la par los mensajes
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages);


  return (
    <div className="app">
     <div className="app__body">
     
     <Sidebar/>
      <Chat messages={messages}/>
     </div>  
    </div>
  );
}

export default App;
