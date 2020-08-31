import React from 'react';

export const Form = () => (
  <>
    <h1>Form</h1>

    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input id="age" name="age" type="number" />
      </div>

      <div>
        <label htmlFor="birthday">Birthday</label>
        <input id="birthday" name="birthday" type="date" />
      </div>

      <div>
        Hobbies:
        <input type="checkbox" name="coding" id="coding" value="coding" />
        <label htmlFor="coding">Coding</label>
        <input type="checkbox" name="reading" id="reading" value="reading" />
        <label htmlFor="reading">Reading</label>
        <input type="checkbox" name="writing" id="writing" value="writing" />
        <label htmlFor="writing">Writing</label>
      </div>

      <div>
        OS:
        <input type="radio" name="windows" id="windows" value="windows" />
        <label htmlFor="windows">Windows</label>
        <input type="radio" name="mac" id="mac" value="mac" />
        <label htmlFor="mac">Mac</label>
        <input type="radio" name="linux" id="linux" value="linux" />
        <label htmlFor="linux">Linux</label>
      </div>

      <div>
        <label>Favorite city?</label>
        <select id="favcity" name="favcity" data-testid="favcity">
          <option value="1">Amsterdam</option>
          <option value="2">Hong Kong</option>
          <option value="3">London</option>
          <option value="4">New York</option>
          <option value="5">Sao Paulo</option>
          <option value="6">Tokyo</option>
        </select>
      </div>

      <div>
        <label>Countries you want to visit</label>
        <div>
          <select id="countries" name="countries" data-testid="countries" multiple>
            <option value="Brazil">Brazil</option>
            <option value="Japan">Japan</option>
            <option value="New Zealand">Italy</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Netherlands">Netherlands</option>
          </select>
        </div>
      </div>

      <button type="submit">
        Submit
      </button>
    </form>
  </>
);
