   
    module.exports = {
      preset: 'ts-jest',
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
      testPathIgnorePatterns: ['<rootDir>/.next/','<rootDir>/node_modules/'],
      testEnvironment: 'jsdom', 
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
      globals:{
        "ts-jest": {
          tsconfig:"tsconfig.jest.json"
      }
    }
    };