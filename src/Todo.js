import initialRender from './initialRender.js';
import listener from './listener.js'
class Todo {
  init() {
    console.log("App Start Run");
    initialRender();     
    listener();   
  }
}

export default Todo;
