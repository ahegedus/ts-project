//bookRepo.test.ts
import App from './App';

describe('Application', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('App.Run', () => {
    it('should return book detail', async () => {
      //arrange
      const mockResolvedValue = 'Hello World';
      console.log = jest.fn().mockResolvedValue(mockResolvedValue);

      //act
      App.Run();

      //assert
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toBeCalledWith(mockResolvedValue);
    });
  });
});
