import { getUserById } from '../../src/js-foundation/03.callbacks';

describe('js-foundation/03.callbacks', () => {
  test('getUserById should return an error if user does not exist', (done) => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User with id ${id} not found`);
      expect(user).toBeUndefined();

      done();
    });
  });

  test('getUserById should return an user', (done) => {
    const id = 2;

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toBeDefined();

      done();
    });
  });

  test('getUserById should return an user whit name "John Doe" and id "1"', (done) => {
    const id = 1;

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: 1,
        name: 'John Doe',
      });

      done();
    });
  });
});
