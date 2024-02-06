import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="bg-indigo-800">
      <div className="w-100 h-100 flex flex-col justify-center items-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <img className="w-30" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" />
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <div className="w-100 flex">
        <img className="w-30 mx-auto" src="https://th.bing.com/th/id/OIG1.3KpulO5CKUhrmacsFeSk?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" srcset="" />
      </div>
    </div>
  );
}

