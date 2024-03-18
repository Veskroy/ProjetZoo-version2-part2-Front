function convertToUrlParams(url) {
    if (url === null || url === undefined) return null;
    //console.log("URLSearchParams", new URLSearchParams(url));
    return url.split('?')[1];
}

export function extractPagination(hydraView) {
    const current = parseInt(new URLSearchParams(convertToUrlParams(hydraView['@id'])).get('page'), 10);
    const first = parseInt(new URLSearchParams(convertToUrlParams(hydraView['hydra:first']))?.get('page'), 10);
    const previous = parseInt(new URLSearchParams(convertToUrlParams(hydraView['hydra:previous']))?.get('page'), 10);
    const next = parseInt(new URLSearchParams(convertToUrlParams(hydraView['hydra:next']))?.get('page'), 10);
    const last = parseInt(new URLSearchParams(convertToUrlParams(hydraView['hydra:last']))?.get('page'), 10);
  
    if (current === undefined || current === null || isNaN(current)) {
      return null;
    }
 
    console.log(current, first, previous, next, last);

    return {
      current,
      first,
      previous,
      next,
      last,
    };
}
