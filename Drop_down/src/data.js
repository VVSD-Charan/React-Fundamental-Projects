export const data = [
  {
    id: 1,
    title: 'What is JSX?',
    info: 'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.',
  },
  {
    id: 2,
    title: 'Can web browsers read JSX directly? ',
    info: "Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object . For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel",
  },
  {
    id: 3,
    title: 'What are synthetic events in React?',
    info: "Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.",
  },
  {
    id: 4,
    title: 'What are the components in React?',
    info: "Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.",
  },
  {
    id: 5,
    title: 'What is a state in React?',
    info: "The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.",
  },
];
