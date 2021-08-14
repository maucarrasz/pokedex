const fetchData = url_API => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url_API, true);
    req.onreadystatechange = () => {
      if (req.readyState === 4) {
        req.status === 200
          ? resolve(JSON.parse(req.responseText))
          : reject(new Error(`Error: ${url_API}`));
      }
    };
    req.send();
  });
};
