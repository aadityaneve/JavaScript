/* API KEY : 8f87cf958b9342d2a86ebdbf85b3fc3d */
/* /top-headlines */

/* https://newsapi.org/v2/everything?q=keyword&apiKey=8f87cf958b9342d2a86ebdbf85b3fc3d */

async function getRandomTopStories() {

    let response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=8f87cf958b9342d2a86ebdbf85b3fc3d"
    )
    let data = await response.json();
    showNews(data.articles);
}
getRandomTopStories();


// LocalStorage
if (localStorage.getItem('news') === null) {
    localStorage.setItem('news', JSON.stringify([]));
}


function showNews(data) {

    data.forEach((element) => {

        let newsDiv = document.getElementById('rightNewsDiv');

        let div = document.createElement('div');
        let title = document.createElement('h3');
        title.innerText = element.title;
        let description = document.createElement('p');
        description.innerText = element.description;

        let img = document.createElement('img');
        img.src = element.urlToImage;

        div.addEventListener('click', () => {
            let news = JSON.parse(localStorage.getItem('news'));
            news.push(element);
            localStorage.setItem('news', JSON.stringify(news));
            window.location.href = 'news.html';
        })

        div.append(title, description, img);

        newsDiv.append(div);

    })

}


// LocalStorage
if (localStorage.getItem('search') === null) {
    localStorage.setItem('search', JSON.stringify([]));
}

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {

    let search = JSON.parse(localStorage.getItem('search'));
    
    let searchBox = document.getElementById('searchBox').value;
    search.push(searchBox);

    localStorage.setItem('search', JSON.stringify(search));
    window.location.href = 'search.html';
})