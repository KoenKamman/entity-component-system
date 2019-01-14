import { Component } from '../Component';
import { EntityManager } from '../EntityManager';

const ECS = new EntityManager();

class TestComponent implements Component {
  public name = 'test';
  public data = {};
}

afterEach(() => {
  ECS.clearEntities();
});

test('registerComponent', () => {
  ECS.registerComponent(TestComponent, 'TestComponent');
  const entity = ECS.createEntity();
  expect(ECS.createComponent(entity, 'TestComponent')).toBeTruthy();
  expect(ECS.createComponent(entity, 'TestComponent2')).toBe(undefined);
  expect(ECS.createComponent(0, 'TestComponent')).toBe(undefined);
});
