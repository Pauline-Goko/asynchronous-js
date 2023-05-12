//Write an asynchronous function that accepts a message string and a delay time in milliseconds.
//The function should log the message to the console after the specified delay time.

const message = () =>{

    console.log("Javascript is fun");
}

setTimeout(message, 3000);


//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data 
//when given a user ID. Write an asynchronous function that fetches and logs the data for each user
// ID one by one, in sequence.

const userIds = [77, 22, 36, 49, 76]; 

function getUserData(id) {
  
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const userData = { id, name: `User ${id}` };
      resolve(userData);
    }, Math.random() * 1000);
  });
}

async function fetchDatA() {
  for (const userId of userIds) {
    try {
      const userData = await getUserData(userId);
      console.log(userData);
    } catch (error) {
      console.error(`Error fetching user data for ID ${userId}:`, error);
    }
  }
}

fetchDatA();





//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the 
//task is successful and rejects if there's an error. Write a function that calls performTask() and 
//logs a custom success message if the task is successful, and a custom error message if there's an error.

function performTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Task is successfully");
      }, Math.random() * 1000);
    });
  }
  function taskPerform() {
    performTask()
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
  taskPerform();

