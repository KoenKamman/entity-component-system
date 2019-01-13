import { Component } from './component';

export class EntityComponentSystem {
  private entities: Map<number, Component[]> = new Map();
  private entityCount: number = 0;

  public createEntity(): number {
    const id = Date.now() + this.entityCount;
    this.entities.set(id, new Array<Component>());
    this.entityCount++;
    return id;
  }

  public deleteEntity(entity: number): void {
    this.entities.delete(entity);
  }

  public getEntities(): Map<number, Component[]> {
    return this.entities;
  }

  public clearEntities(): void {
    this.entities.clear();
  }
}
