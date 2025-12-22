// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
(global as any).require = (global as any).require || require;
(global as any).require.context = (_base: string, _deep?: boolean, _filter?: RegExp) => {
  return (name: string) => name;
};
