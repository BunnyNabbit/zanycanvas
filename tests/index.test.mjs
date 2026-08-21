// @ts-check
import { Stack } from "../index.mjs"
describe("index", () => {
	it("should import", async () => {
		expect(await import("../index.mjs")).toBeTruthy()
	})
	it("should export Stack", () => {
		expect(Stack).toBeTruthy()
	})
})

describe("Stack", () => {
	it("should start empty when constructed with no arguments", () => {
		const stack = new Stack()

		expect(stack.size).toBe(0)
		expect(stack.isEmpty).toBe(true)
		expect(stack.peek()).toBeUndefined()
	})

	it("should accept initial items in the constructor", () => {
		const stack = new Stack([1, 2, 3])

		expect(stack.size).toBe(3)
		expect(stack.peek()).toBe(3)
		expect(stack.isEmpty).toBe(false)
	})

	it("should throw a TypeError when constructed with a non-array", () => {
		// @ts-expect-error Testing invalid constructor input.
		expect(() => new Stack("hello")).toThrow(TypeError)
	})

	it("should push an item and return the new size", () => {
		const stack = new Stack()
		const newSize = stack.push(10)

		expect(newSize).toBe(1)
		expect(stack.peek()).toBe(10)
		expect(stack.size).toBe(1)
	})

	it("should pop the top item and shrink the stack", () => {
		const stack = new Stack([1, 2, 3])
		const value = stack.pop()

		expect(value).toBe(3)
		expect(stack.size).toBe(2)
		expect(stack.peek()).toBe(2)
	})

	it("should return undefined when popping an empty stack", () => {
		expect(new Stack().pop()).toBeUndefined()
	})

	it("should clear all items and return the stack instance", () => {
		const stack = new Stack([1, 2, 3])
		const returned = stack.clear()

		expect(returned).toBe(stack)
		expect(stack.size).toBe(0)
		expect(stack.isEmpty).toBe(true)
	})
})
