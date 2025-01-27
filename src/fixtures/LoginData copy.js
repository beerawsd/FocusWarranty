const loginValidData = [
    { 
        username: 'admin', 
        password: '12345678' 
    }
];
  
const loginInvalidData = [
    { 
        username: 'admi', 
        password: '12345678' 
    },
    { 
        username: 'admin', 
        password: '1234567' 
    },
];
  
module.exports = { 
    loginValidData,
    loginInvalidData
};