import API_KEY from "./apikey.js";
console.log(API_KEY);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
	}
};
const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

btn.addEventListener('click', () => {

    list.innerText = '';
    let inputVal = input.value;
    console.log(inputVal);
    fetch(`https://bb-finance.p.rapidapi.com/market/auto-complete?query=${inputVal}`, options)
	.then(response => response.json())
	.then(data => {
        data.news.map(item => {
            
            const title = item.title;
            const link = item.longURL;
        
            const newTitle = document.createElement('li');
            newTitle.appendChild(document.createTextNode(title));

            const newLink = document.createElement('li');
            const tub = document.createElement('a')
            tub.setAttribute('href',link);
            tub.innerText = "Link to the artical:";
            newLink.appendChild(tub);

            list.appendChild(newTitle);
            list.appendChild(newLink);
        });
    })
	.catch(err => console.log(err));
    input.value = ''
});