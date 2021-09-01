class MyElement extends HTMLElement {
    constructor() {
      super();
      // a new element created
    }
  
    connectedCallback() {
      // browser calls this method when the element is added to the document
       
    }
  
    disconnectedCallback() {
      // browser calls this method when the element is removed from the document
      
    }
  
    static get observedAttributes() {
      return [/* array of attribute names to monitor for changes */];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      // called when one of attributes listed above is modified
    }
  
  }

// instruct the browser  that <my-element> is served by our new class
customElements.define("my-element", MyElement);