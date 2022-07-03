// Explain Function.prototype.bind

// The bind() the method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

var nodevember = {
    numOfAttendees: 0,
    incrementNumOfAttendees: function() {
      this.numOfAttendees++;
    }
    // other properties
  };
  
  $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees.bind(nodevember));