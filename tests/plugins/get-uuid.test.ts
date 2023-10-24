import { getUUID } from './../../src/plugins/get-uuid';

describe('plugings/get-uuid.ts', () => {
  test('getUUID should return a uuid', () => {
    expect(getUUID()).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    );
  });
});
