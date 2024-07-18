class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    add(book) {
        let tableBody = document.getElementById("tableBody");
        let uiString;
        uiString = `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
            </tr> `;
        tableBody.innerHTML += uiString;
    };
    clear() {
        let libraryForm = document.querySelector("#libraryForm");
        libraryForm.reset();
    };

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    };

    show(type, displayMessage) {
        let message = document.querySelector("#message");
        message.innerHTML = `
                                  <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                        <strong>Message : </strong> ${displayMessage} 
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                  </div>`
        setTimeout(() => {
            message.innerHTML = ''
        }, 2000)
    }
}

function libraryFormSumbit(e) {
    e.preventDefault();
    console.log('you submitted');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear() ;
        display.show('success', 'nice to meet you')
    }
    else{
        display.show('danger' , 'Input text al least two characters ') ;
    }

}

let libraryForm = document.querySelector("#libraryForm");
libraryForm.addEventListener('submit', libraryFormSumbit);

let del = document.querySelector("#del") ;
del.addEventListener('click' , ()=>{
    tableBody.innerHTML = '' ;
})