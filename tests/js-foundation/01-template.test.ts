import { emailTemplate } from './../../src/js-foundation/01-template';

describe('js-foundation/01-template', () => {
  test('emaitTemplate should contain a greeting', () => {
    // 1. Arrange

    // 2. Act

    // 3. Assert
    expect(emailTemplate).toContain('Hello');
  });

  test('emailTemplate should contain {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
