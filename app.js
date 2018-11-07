const omdb = new OmdbApi();
let movieArr = [];
const ui = new UI();
const searchText = document.getElementById('searchText');
const form = document.getElementById('form');
form.addEventListener('submit', searchForMovie);

function searchForMovie(e) {
    const searchValue = searchText.value;
    const responseInJson = omdb.grabData(searchValue);
    responseInJson
        .then((res) => {
            document.querySelector('.alert').style.display = 'none';
            document.querySelector('#output').style.display = 'block';
            ui.showOutputDivUI(res.Search);
        }).catch((err) => {
            console.log(err);
            document.querySelector('.alert').style.display = 'block';
            document.querySelector('#output').style.display = 'none';
        });
    e.preventDefault();
}