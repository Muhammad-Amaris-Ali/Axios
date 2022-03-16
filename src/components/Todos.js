import React, { useEffect, useState } from "react";
import axios from "axios";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var config = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos",
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
        //console.log(users)
      })
      .catch((error) => {
        alert(error);
      });
  };

  const postData = () => {
    var body = {
      title: title,
      completed: false,
    };

    var jsonObject = JSON.stringify(body);

    var config = {
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/todos",
      header: {
        ContentType: "application/json",
      },
      data: jsonObject,
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        //setTodos(response.data)
        //console.log(users)
      })
      .catch((error) => {
        alert(error);
      });
  };

  const patchData = () => {
    var body = {
      title: title,
      completed: false,
    };

    var jsonObject = JSON.stringify(body);

    var config = {
      method: "PATCH",
      url: "https://jsonplaceholder.typicode.com/todos/1",
      header: {
        ContentType: "application/json",
      },
      data: jsonObject,
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        //setTodos(response.data)
        //console.log(users)
      })
      .catch((error) => {
        alert(error);
      });
  };

  const deleteData = () => {
    var config = {
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/todos/1",
      header: {
        ContentType: "application/json",
      },
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        //setTodos(response.data)
        //console.log(users)
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={postData}>Save Todo</button>
      <button onClick={patchData}>Edit Todo</button>
      <button onClick={deleteData}>Delete Todo</button>
      {todos.map((todo) => {
        return (
          <div>
            <h4>-------------</h4>
            <h4>{todo.title}</h4>
            <h4>-------------</h4>
          </div>
        );
      })}
    </div>
  );
};
