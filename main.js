let books;
    if(JSON.parse(localStorage.getItem("books")) !== null){
        console.log("not empty");
        books = JSON.parse(localStorage.getItem("books"));
    } else {
        console.log("empty");
        books = myBooks;    
    }

    console.log(books);

function init() {
    renderBookCards();
}

function renderBookCards() {
    const bookWrapperRef = document.getElementById("books-wrapper");
    bookWrapperRef.innerHTML = "";

     for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        bookWrapperRef.innerHTML += getBookTemplate(books, bookIndex);
    }
}

function renderComments(bookIndex){
    let comments = "";
    for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
        comments += getComments(bookIndex, commentIndex);
    }
    return comments;
}

function toggleLike(bookIndex) {
    if (books[bookIndex].liked) {
        books[bookIndex].liked = false;
        books[bookIndex].likes --;
    } else {
        books[bookIndex].liked = true;
        books[bookIndex].likes ++;
    }
    saveToLocalStorage();
    renderBookCards(bookIndex);
}

function saveToLocalStorage() {
    console.log(books + " pre save");
    localStorage.setItem("books", JSON.stringify(books));
}


function saveComment(bookIndex) {
    const commentInputRef = document.getElementById("comment-input-${bookIndex}");
    const commentInput = commentInputRef.value;

    if (commentInput === "") {
        /* do nothing */
    } else {
        let myComment = {
            name: "You",
            comment: commentInput,
        };
        books[bookIndex].comments.push(myComment);

        saveToLocalStorage();
        renderComments(bookIndex);
    }

        commentInput = "";
}
