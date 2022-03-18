import { c as create_ssr_component, e as escape } from "../../../chunks/index-0a196191.js";
const metadata = {
  "title": "My cool counter",
  "date": "2021-05-20T00:00:00.000Z",
  "summary": "A cool counter I made"
};
const { title, date, summary } = metadata;
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(title)}</h1>
<p>Ever want to increment a number? Now you can!</p>`;
});
export { Test as default, metadata };
