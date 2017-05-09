/* SystemJS module definition */
declare var module: NodeModule;

declare var google: any;

declare var Chart: any;

interface NodeModule {
	id: string;
}

interface Array<T> {
	contains(value: T): boolean;
	remove(value: T): T;
	isEmpty(): boolean;
}
