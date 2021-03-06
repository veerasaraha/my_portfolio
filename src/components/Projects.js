import React from 'react'
import budget from './../images/budget_tracker.png'
import notes from './../images/notes_app.png'
import covidTracker from './../images/covid-tracker.png'

const Projects = () => {
  return (
    <div className='projects' id='project'>
      <h1 className='project_title'>Projects</h1>
      <div className='project_card'>
        <div>
          <img src={budget} alt={'budget tracker'} />
        </div>

        <div>
          <h2>Budget Tracker</h2>
          <p>
            Tracks monthly expenses based current months income. It stores data
            using web browser's Local Storage, as it is my todo project so I
            didn't use database to store the data.
          </p>
          <div>
            <h4>React.js, Context API, React Hooks.</h4>
          </div>
          <div>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://react-budget-tracker-app.herokuapp.com/'>
              <button>View Demo</button>
            </a>
          </div>
        </div>
      </div>

      <div className='project_card'>
        <div>
          <img src={notes} alt={'budget tracker'} />
        </div>

        <div>
          <h2>Notes App</h2>
          <p>
            It keeps and manage notes here, it stores data using MongoDB
            atlas.User should create an acoount to use this app and it uses
            Nodejs for the backend microserveices such as API.
          </p>
          <div>
            <h4>MongoDB, ExpressJS, ReactJS, NodeJS , Redux (MERN Stack)</h4>
          </div>
          <div>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://mern-keep-notes.herokuapp.com/'>
              <button>View Demo</button>
            </a>
          </div>
        </div>
      </div>

      <div className='project_card'>
        <div>
          <img src={covidTracker} alt={'budget tracker'} />
        </div>

        <div>
          <h2>Covid-19 Tracker</h2>
          <p>
            Designed and developed covid tracker using public API. Added a
            search field to search by district and implemented a sorting
            algorithm on every column. 
          </p>
          <div>
            <h4>React.js, React Hooks , Bootstrap.</h4>
          </div>
          <div>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://react-covid-19-tracker-india.netlify.app/'>
              <button>View Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
