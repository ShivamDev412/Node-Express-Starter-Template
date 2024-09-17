module.exports = {
  preset: 'ts-jest',                      
  testEnvironment: 'node',                 
  testMatch: ['**/src/**/*.test.ts'],     
  moduleFileExtensions: ['ts', 'js'],      
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',           
    },
  },
  collectCoverage: true,              
  coverageDirectory: 'coverage',           
  coverageReporters: ['text', 'lcov'],   
};