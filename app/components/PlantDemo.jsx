const React = require('react');
const PlantForm = require('./PlantForm');

/* the main page for the index route of this app */



// Landing Page
const PlantDemo = function() {

  return (
    <div>
      <h1>PlantPath</h1>
      <h3>Answer the questions below to find the houseplant of your dreams! </h3>
      <PlantForm />
      <br />
    </div>
  );
}

module.exports = PlantDemo;