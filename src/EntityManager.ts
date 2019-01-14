import { Component } from './Component';
import { ISystem } from './ISystem';

export class EntityManager {
  private entities: Map<number, Component[]> = new Map();
  private componentRegistry: Map<string, new () => Component> = new Map();
  private systems: ISystem[] = [];
  private entityCount: number = 0;

  public createEntity(): number {
    const id = Date.now() + this.entityCount;
    this.entities.set(id, new Array<Component>());
    this.entityCount++;
    return id;
  }

  public deleteEntity(entity: number): void {
    this.entities.delete(entity);
    return;
  }

  public clearEntities(): void {
    this.entities.clear();
    return;
  }

  public registerComponent<T extends Component>(component: new () => T, name: string): void {
    this.componentRegistry.set(name, component);
    return;
  }

  public clearComponentRegistry(): void {
    this.componentRegistry.clear();
    return;
  }

  public removeComponentFromRegistry(componentName: string): void {
    this.componentRegistry.delete(componentName);
    return;
  }

  public createComponent(entity: number, componentName: string): Component | undefined {
    const entityComponents = this.entities.get(entity);
    if (entityComponents) {
      const component = this.componentRegistry.get(componentName);
      if (component) {
        const componentInstance = new component();
        entityComponents.push(componentInstance);
        return componentInstance;
      }
    }
    return;
  }

  public removeComponent(entity: number, componentName: string): void {
    const entityComponents = this.entities.get(entity);
    if (entityComponents) {
      const componentIndex = entityComponents.findIndex((component: Component) => component.name === componentName);
      entityComponents.splice(componentIndex, 1);
    }
    return;
  }

  public getComponent(entity: number, componentName: string): Component | undefined {
    const entityComponents = this.entities.get(entity);
    if (entityComponents) {
      return entityComponents.find((component: Component) => component.name === componentName);
    }
    return;
  }

  public addSystem(system: ISystem): void {
    this.systems.push(system);
    return;
  }

  public runSystems(): void {
    const entities = Array.from(this.entities.keys());
    this.systems.forEach((system: ISystem) => {
      system.update(entities);
    });
    return;
  }
}
