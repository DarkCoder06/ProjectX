// Function to override the default behavior of events
function enableAllEvents() {
    document.addEventListener('contextmenu', function(event) {
      event.stopPropagation();
    }, true);
    
    document.addEventListener('copy', function(event) {
      event.stopPropagation();
    }, true);

    // document.addEventListener('paste', function(event) {
    //   event.stopPropagation();
    // }, true);
    
    document.addEventListener('cut', function(event) {
      event.stopPropagation();
    }, true);
    
    document.addEventListener('selectstart', function(event) {
      event.stopPropagation();
    }, true);
  
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      * {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
    `;
    document.head.appendChild(style);
}
  
  // Call the function to enable all events
enableAllEvents();
  