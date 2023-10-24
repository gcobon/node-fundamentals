import { httpClient } from './../../src/plugins/http-client.plugin';

describe('plugins/http-client.plugin.ts', () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  test('httpClient.get() should return a promise', () => {
    expect(httpClient.get(url)).toBeInstanceOf(Promise);
  });

  test('httpClient.get() should return a object', async () => {
    const data = await httpClient.get(url);

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
  });

  test('httpClient.get() should have POST, PUT and DELETE methods', async () => {
    expect(httpClient).toEqual({
      get: expect.any(Function),
      post: expect.any(Function),
      put: expect.any(Function),
      delete: expect.any(Function),
    });
  });
});
