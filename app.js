function add_item() {
    let item = document.getElementById('box').value;
    let list_item = document.getElementById('list_item');

    if (item.trim() !== "") {
        let make_li = document.createElement('li');
        make_li.appendChild(document.createTextNode(item));

        // Create delete button
        let deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.onclick = function () {
            list_item.removeChild(make_li);
        };

        make_li.appendChild(deleteButton);
        list_item.appendChild(make_li);
        
        document.getElementById('box').value = "";
    } else {
        alert('Please add a value to the item.');
    }
}
