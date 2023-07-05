async function getData(url) {
    var response = await fetch(url);
    var data = await response.json();
    return data
}