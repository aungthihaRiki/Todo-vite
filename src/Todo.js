import initialRender from './initialRender.js';
import listener from './listener.js'
import observer from './observer.js';

class Todo {
  init() {
    console.log("App Start Run");
    observer();
    initialRender();     
    listener();   
  }
}

export default Todo;
