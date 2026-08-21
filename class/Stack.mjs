// @ts-check
export default class Stack {
	/** @type {any[]} */
	#items = []
	/**Initializes a new instance of {@link Stack}.
	 *
	 * @param {any[]} [items=[]] - Initial items, bottom-to-top order. Default is `[]`
	 */
	constructor(items = []) {
		// just being safe here, don't want strings
		if (!Array.isArray(items)) {
			throw new TypeError("Expected an array")
		}
		// spread so we're not holding a reference to the original array
		this.#items = [...items]
	}
	/**@param {any} item - The item to push onto the stack.
	 * @returns {number} The new size of the stack.
	 */
	push(item) {
		// add it on top
		this.#items.push(item)
		return this.size
	}
	/** @returns {any | undefined} The removed top item, or undefined if empty. */
	pop() {
		// native pop already handles the empty case for us
		return this.#items.pop()
	}
	/** @returns {any | undefined} The top item without removing it, or undefined if empty. */
	peek() {
		// just to take a look without really making any changes
		return this.#items.at(-1)
	}
	/**Removes all items from the stack.
	 *
	 * @returns {this} The stack instance, for chaining.
	 */
	clear() {
		// clears the array
		this.#items.length = 0
		return this // so you can chain stuff after clearing if you want
	}

	get size() {
		// number of elements in the array
		return this.#items.length
	}

	get isEmpty() {
		// true if there's nothing left
		return this.size === 0
	}
}
