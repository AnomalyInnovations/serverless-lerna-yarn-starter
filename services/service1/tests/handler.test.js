import * as handler from '../handler';

test('main', async () => {
  const response = await handler.main('event', 'context');

  expect(response.statusCode).toEqual(200);
  expect(typeof response.body).toBe("string");
});
