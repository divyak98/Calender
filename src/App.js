import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0(); // Extracting user info
  const events = [
    {
      title: 'PPT Submission',
      start: new Date(2024, 4, 13, 10, 0), 
      end: new Date(2024, 4, 13, 12, 0), 
    },
    {
      title: 'ESE Start',
      start: new Date(2024, 4, 14, 10, 0), 
      end: new Date(2024, 4, 14, 12, 0), 
    },
    {
      title: 'Economics',
      start: new Date(2024, 4, 14, 10, 0), 
      end: new Date(2024, 4, 14, 12, 0), 
    },
    {
      title: 'IOT',
      start: new Date(2024, 4, 16, 10, 0), 
      end: new Date(2024, 4, 16, 12, 0), 
    },
    {
      title: 'Computer Networks',
      start: new Date(2024, 4, 18, 10, 0), 
      end: new Date(2024, 4, 18, 12, 0), 
    },
    {
      title: 'Antenna',
      start: new Date(2024, 4, 22, 10, 0), 
      end: new Date(2024, 4, 22, 12, 0), 
    },
    {
      title: 'Wireless and Mobile Communictaion',
      start: new Date(2024, 4, 29, 10, 0), 
      end: new Date(2024, 4, 29, 12, 0),
    },
    {
      title: 'VLSI',
      start: new Date(2024, 5, 1, 10, 0), 
      end: new Date(2024, 5, 1, 12, 0), 
    },
    {
      title: 'Mummy Birthday',
      start: new Date(2024, 4, 4, 10, 0), 
      end: new Date(2024, 4, 4, 12, 0), 
    },
    {
      title: 'Maharashtra Day',
      start: new Date(2024, 4, 1, 10, 0), 
      end: new Date(2024, 4, 1, 12, 0), 
    },
    {
      title: 'Result Day',
      start: new Date(2024, 5, 10, 10, 0), 
      end: new Date(2024, 5, 10, 12, 0), 
    },
    {
      title: 'Papa Birthday ',
      start: new Date(2024, 5, 12, 10, 0), 
      end: new Date(2024, 5, 12, 12, 0), 
    },
    {
      title: 'School Gettogether',
      start: new Date(2024, 5, 15, 10, 0), 
      end: new Date(2024, 5, 15, 12, 0), 
    },
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = event.color;
    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
    };
    return {
      style,
    };
  };

  return (
    <div>
      <header className="header">
        <h1 className="header-text">Welcome to My Calendar App</h1>
        {isAuthenticated && (
          <button className="logout-button" onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        )}
      </header>
      <main className="main">
        {isAuthenticated ? (
          <div>
            <h2 className="welcome-text">Heyy...! {user.name}</h2>
            <div className="calendar-container">
              <div className="calendar">
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  formats={{
                    dateFormat: 'D', // Display only the date
                  }}
                  eventPropGetter={eventStyleGetter}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="login-container">
            <h2 className="welcome-text">Please Login to Continue...</h2>
            <button className="login-button" onClick={() => loginWithRedirect()}>Login with Redirect</button>
          </div>
        )}
      </main>
    
    </div>
  );
};

export default MyCalendar;
