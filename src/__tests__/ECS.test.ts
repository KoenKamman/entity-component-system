import { EntityComponentSystem } from '..';

test('ECS test', () => {
  let ECS = new EntityComponentSystem();
  expect(ECS.test('hello')).toBe('hello');
});
