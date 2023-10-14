export const storage = (() => {
  const noEntry = (() => {
    const savedEntry = localStorage.getItem('saved_entry');

    return savedEntry == null;
  })();

  const defaultCity = (() => {
    return noEntry ? 'manila' : localStorage.getItem('saved_entry');
  })();

  function saveEntry(_, data) {
    const loc = data.location;

    localStorage.setItem('saved_entry', `${loc.name} ${loc.region} ${loc.country}`);
  }

  return { defaultCity, saveEntry };
})();

PubSub.subscribe('data_ready', storage.saveEntry);
