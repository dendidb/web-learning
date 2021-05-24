import {Accordion, Popup} from 'components';


// App
const App = (() => {

  // run transition
  const runTransition = () => {
    $('body').removeClass('.hold-transition');
  }

  // ready 
  const ready = () => {
    (($) => {
      // --- Global
      runTransition();

      // --- Project
      Accordion.init();
      Popup.init();

    })(jQuery);
  }

  // -- load
  const load = () => {
    (($) => {
      $(window).on('load', () => {
        // run function on load finished
      });
    })(jQuery);
  }

  // Init
  const init = () => {
    ready();
    load();
  }

  return {
    init
  }

})();

// App

App.init()