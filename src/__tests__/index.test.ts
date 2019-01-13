import { EntityComponentSystem } from '..';

let ECS = new EntityComponentSystem();

afterEach(() => {
  ECS.clearEntities();
});

test('createEntity', () => {
  const entity = ECS.createEntity();
  expect(typeof entity).toBe('number');
  expect(ECS.getEntities().has(entity)).toBe(true);
});

test('deleteEntity', () => {
  const entity = ECS.createEntity();
  ECS.deleteEntity(entity);
  expect(ECS.getEntities().has(entity)).toBe(false);
});

test('getEntities', () => {
  const entity = ECS.createEntity();
  const entity2 = ECS.createEntity();
  expect(ECS.getEntities().has(entity)).toBe(true);
  expect(ECS.getEntities().has(entity2)).toBe(true);
});

test('clearEntities', () => {
  const entity = ECS.createEntity();
  const entity2 = ECS.createEntity();
  ECS.clearEntities();
  expect(ECS.getEntities().has(entity)).toBe(false);
  expect(ECS.getEntities().has(entity2)).toBe(false);
});