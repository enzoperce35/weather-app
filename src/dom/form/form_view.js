export const formView = (() => {
  const form = document.getElementById('form');
  const contents = document.querySelectorAll("#container > *:not(#form)");
  const formToggles = document.querySelectorAll('.form-toggle');

  function show() {
    contents.forEach((content) => { content.style = "filter: blur(10px)"});

    form.style.visibility = 'visible';
  }

  function hide() {
    contents.forEach((content) => { content.style = "filter: unset"});

    form.style.visibility = 'hidden';
  }

  // form visibility
  for (let i = 0; i < formToggles.length; i++) {
    const toggle = formToggles[i];

    toggle.onclick = (e) => {
      (e.target.id == 'form-link') ? formView.show() : formView.hide();
    }
  }

  return {show, hide}
})();
