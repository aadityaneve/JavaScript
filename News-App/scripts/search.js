


async function searchNews() {

    let search = JSON.parse(localStorage.getItem('search'));

    let response = await fetch(
        `https://newsapi.org/v2/everything?q=${search[search.length - 1]}&apiKey=8f87cf958b9342d2a86ebdbf85b3fc3d`
    )
    let data = await response.json();
    displayNews(data.articles);
    console.log(data.articles);

    localStorage.setItem('search', JSON.stringify(search));

}
searchNews();


function displayNews(data) {

    data.forEach((element) => {

        let newsDiv = document.getElementById('newsDiv');

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