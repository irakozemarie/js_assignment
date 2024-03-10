// Step 1: Create function to get sleep hours for each day
const getSleepHours = day => {
    switch (day.toLowerCase()) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 9;
      case 'thursday':
        return 8;
      case 'friday':
        return 5;
      case 'saturday':
        return 10;
      case 'sunday':
        return 11;
      default:
        return 'Invalid day';
    }
  };
  
  // Step 2: Test the function
  console.log(getSleepHours('monday')); // Output: 8
  
  // Step 4: Create function to get actual sleep hours for the week
  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + 
    getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + 
    getSleepHours('sunday');
  
  // Step 6: Create function to get ideal sleep hours for the week
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  // Step 7: Test the new functions
  console.log(getActualSleepHours()); // Output: Sum of all sleep hours in the week
  console.log(getIdealSleepHours(8)); // Output: 56
  
  // Step 8: Create function to calculate sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed by ' + (actualSleepHours - idealSleepHours) + ' hour(s).');
    } else {
      console.log('You should get some rest. You need ' + (idealSleepHours - actualSleepHours) + ' hour(s) more.');
    }
  };
  
  // Step 11: Start the program
  calculateSleepDebt();
 
  