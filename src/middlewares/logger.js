const prevConsole = 'font: 1.5em/1 Arial; color: #555555;';
const actionConsole = `background-color: #008CBA;
  border: none;
  color: white;
  padding: 8px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;`;
const nextConsole = 'font: 1.5em/1 Arial; color: #f44336;';

export default store => next => action => {
  console.groupCollapsed(action.type);
  console.timeEnd('time');

  console.log('%c prev state', prevConsole, store.getState());
  console.log('%c action', actionConsole, action);
  const returnValue = next(action);
  console.log('%c next state', nextConsole, store.getState());
  console.time('time');

  console.groupEnd(action.type);
  return returnValue;
};
