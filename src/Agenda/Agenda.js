import React, { Component } from 'react';
import './Agenda.css';

class Agenda extends Component {
  render() {
    const plans = [
      {
        time: '2:00 pm',
        topics: [
          'Go out from office'
        ]
      },
      {
        time: '3:00 pm',
        topics: [
          'Check in',
          'Opening speech'
        ]
      },
      {
        time: '3:15 pm',
        topics: [
          'Games',
          'Preparing for BBQ'
        ]
      },
      {
        time: '4:00 pm',
        topics: [
          'BBQ start',
          'Playing music',
          'Games',
          'Beer'
        ]
      },
      {
        time: '6:00 pm',
        topics: [
          'GIN',
          'Karaoke'
        ]
      },
      {
        time: '7:30 pm',
        topics: [
          'Go crazy...'
        ]
      },
      {
        time: '10:00 pm',
        topics: [
          'Out of control!'
        ]
      },
      {
        time: '10:00 am (next day)',
        topics: [
          'Check out'
        ]
      }
    ];

    return (
      <section className='agenda padding'>
        <h2>Agenda</h2>
        <ul className='list-inline'>
          <li><strong>Date:</strong> Sep 20, 2019</li>
          <li><strong>Time:</strong> 3:00pm onwards</li>
          <li><strong>Location:</strong> CSC at Changi</li>
        </ul>
        <hr />
        {plans.map((plan, index) => (
          <div key={index}>
            <h4>{plan.time}</h4>
            <ul>
              {plan.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
}

export default Agenda;