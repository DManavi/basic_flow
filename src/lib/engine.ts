import { Promisable } from "type-fest";

export class Workflow<TContext = any> {
  protected _handlers: Array<Function> = [];
  protected readonly context?: TContext;

  constructor(context?: TContext) {
    this.context = context;
  }

  add(...handlers: Array<Function>) {
    this._handlers.push(...handlers);
  }

  run<U>(...args: Array<any>): U | Promisable<U> {
  }
}
