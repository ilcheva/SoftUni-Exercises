function createArticle() {

// 	let input = document.getElementById('createTitle');
// 	const textArea = document.getElementById('createContent')​;
// 	const articles = document.getElementById('articles')​;	
// 	const article = document.createElement('article'); // creating new elements​
	
// 	const h3 = document.createElement('h3');​	
// 	const p = document.createElement('p');​	
// 	if(input.value !== '' && textArea.value !== '') {​
	
// 	h3.innerHTML = input.value;​
	
// 	p.innerHTML = textArea.value; ​
// 	p.appendChild(article);
// 	h3.appendChild(article);
// 	article.appendChild(articles);
// 	}
	
// }
	let titleInputElement = document.getElementById('createTitle');
	let contentInputElement = document.getElementById('createContent');

	let headingElement = document.createElement('h3');
	headingElement.innerHTML = titleInputElement.value;
	titleInputElement.value='';

	let contentSectionElement = document.createElement('p');
	contentSectionElement.innerHTML = contentInputElement.value;
	contentInputElement.value='';

	let articleElement = document.createElement('article');
	articleElement.appendChild(headingElement);
	articleElement.appendChild(contentSectionElement);

	let articleSectionElement = document.getElementById('articles');
	articleSectionElement.appendChild(articleElement);
}