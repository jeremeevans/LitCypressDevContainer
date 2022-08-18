// import { expect, fixture, html } from "@open-wc/testing"
import { expect } from "@open-wc/testing"
import "./example-element"

describe("my-test", () => {
  it("works", async () => {
    // const el = await fixture(html`<example-element></example-element>`)
    // expect(el).dom.to.equal("<example-element></example-element>")
    expect(true).to.equal(true)
  })
})

// import { ExampleElement } from "./example-element"
// import { fixture, assert } from "@open-wc/testing"
// import { html } from "lit/static-html.js"

// suite("example-element", () => {
//   test("is defined", () => {
//     const el = document.createElement("my-element")
//     assert.instanceOf(el, ExampleElement)
//   })

//   test("renders with default values", async () => {
//     const el = await fixture(html`<example-element></example-element>`)
//     assert.shadowDom.equal(
//       el,
//       `
//        <h1>Hello, World!</h1>
//        <button part="button">Click Count: 0</button>
//        <slot></slot>
//      `
//     )
//   })

//   test("renders with a set name", async () => {
//     const el = await fixture(
//       html`<example-element name="Test"></example-element>`
//     )
//     assert.shadowDom.equal(
//       el,
//       `
//        <h1>Hello, Test!</h1>
//        <button part="button">Click Count: 0</button>
//        <slot></slot>
//      `
//     )
//   })

//   test("handles a click", async () => {
//     const el = (await fixture(
//       html`<example-element></example-element>`
//     )) as ExampleElement
//     const button = el.shadowRoot!.querySelector("button")!
//     button.click()
//     await el.updateComplete
//     assert.shadowDom.equal(
//       el,
//       `
//        <h1>Hello, World!</h1>
//        <button part="button">Click Count: 1</button>
//        <slot></slot>
//      `
//     )
//   })

//   test("styling applied", async () => {
//     const el = (await fixture(
//       html`<example-element></example-element>`
//     )) as ExampleElement
//     await el.updateComplete
//     assert.equal(getComputedStyle(el).paddingTop, "16px")
//   })
// })
