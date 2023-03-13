import Validator from '../index';

test('Проверка имени пользователя на соответствие регулярному выражению.', () => {
  const input = new Validator().validateUsername('Alexey');
  expect(input).toEqual(true);
});
