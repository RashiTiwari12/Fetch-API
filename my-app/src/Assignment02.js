import React from 'react';
import { useState, useEffect } from 'react';

const Assignment02 = () => {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=INdia")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setToDos(res);
      })
  }, [])
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
            <th scope="col">State</th>
            {/* <th scope="col">Webpages</th> */}
            <th scope="col">Domain</th>


          </tr>
        </thead>
        <tbody>
          {
            todos && todos.map(t =>
              <tr>
                <td>{t.name}</td>
                <th>{t.country}</th>
                <th >{t['state-province']}</th>
                {/* <th>{t['web_pages']}</th> */}
                <th>{t.domains}</th>


              </tr>
            )

          }


        </tbody>
      </table>
    </div>
  );
};

export default Assignment02;
