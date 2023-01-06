function Book(id, title, author, themes = []) {
	this.id = id, 
	this.title = title, 
	this.author = author, 
	this.themes = themes
}


Book.prototype.addTheme = function (theme) {
    this.themes.push(theme)
}

const myBook = new Book(1, 'Harry Potter', 'JK ROwling', ['Fantasy', 'Horror'])

myBook.addTheme('Awesome Theme')