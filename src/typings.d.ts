/* SystemJS module definition */

interface Array<T> {
	contains(value: T): boolean;
	remove(value: T): T;
	isEmpty(): boolean;
}
