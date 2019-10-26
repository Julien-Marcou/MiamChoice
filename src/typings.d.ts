/* SystemJS module definition */

declare var Chart: any;

interface Array<T> {
	contains(value: T): boolean;
	remove(value: T): T;
	isEmpty(): boolean;
}
