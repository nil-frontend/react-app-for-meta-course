import React from 'react'

export default function Form() {
  return (
    <>
    <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder={1} id="guests" />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" defaultValue="Make Your reservation" aria-label="On Click"/>



        </form>



        
        <form action>
          <fieldset>
            <legend>Your date of birth</legend>

            <input type="date" name="dob" id="dob" />
            {/* <label htmlFor="dobDay">Day</label>
            <select id="dobDay">
              …
            </select>
            <label htmlFor="dobMonth">Month</label>
            <select id="dobMonth">
              …
            </select>
            <label htmlFor="dobYear">Year</label>
            <input id="dobYear" type="text" placeholder="YYYY" /> */}
          </fieldset>

          

        </form>
    </>
  )
}
