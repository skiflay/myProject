
window.onload= function(){
    document.getElementById('display').onclick= display;
    async function display(){
        let res = await (await fetch('http://localhost:3000/books')).json();
        //let myhtml = document.getElementById('viewBook');
        res.forEach(book => {
            displayBook(book);
        });
    }
    
} 

function displayBook(data) {
    let tBody = document.getElementById("table_body_id");
    const tr = document.createElement("tr");
    const ISBN = document.createElement("td");
    ISBN.textContent = data.ISBN;
    const bookTitle = document.createElement("td");
     bookTitle.textContent = data.bookTitle;
    const overDueFee = document.createElement("td");
    overDueFee.textContent = data.overdueFee;
    const publisher = document.createElement("td");
    publisher.textContent = data.Publisher;
    const publishedDate = document.createElement("td");
    publishedDate.textContent = data.datePublished;
    const deleteButton = document.createElement("button");
    deleteButton.style.backgroundColor = "Red";
    deleteButton.style.backgroundColor = 'margin-left=10px';
    deleteButton.dataset.id = data.bookId;
    deleteButton.textContent = "Remove";
    const updateButton = document.createElement("button");
    updateButton.style.backgroundColor = "Green";
    updateButton.dataset.id = data.bookId;
    updateButton.textContent = "Update";
    tr.appendChild(ISBN);
    tr.appendChild(bookTitle);
    tr.appendChild(overDueFee);
    tr.appendChild(publisher);
    tr.appendChild(publishedDate);
    tr.appendChild(updateButton);
    tr.append(deleteButton);
    tBody.append(tr);
}


    
  

async function bookToAdd() {
    const book= {
        isbn: document.querySelector("#isbn").value,
        title: document.querySelector("#bookTitle").value,
        overdueFee: document.querySelector("#overdueFee").value,
        publisher: document.querySelector("#publisher").value,
        datePublished: document.querySelector("#datePub").value,
        page: document.querySelector("#pages").value
    }

    const url = "http://localhost:3000/books";
    const result = await fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    const data = await result.json();
    console.log(data)
    clearField();
    showSuccess('book successfully added!!')
}



