let ajax = () => {
    let xhr = new XMLHttpRequest(); // create new XHR object
    xhr.open('GET', '14_AJAX.txt', true); // initialize request

    // set up event listener before sending
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            //console.log(this.responseType);
            console.log(this.responseURL);
            //
            document.querySelector("#header-id").innerText = this.responseText;
        }
    };

    xhr.send(); // send request
};
//
let ajaxJSON = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                // Parse JSON
                let data = JSON.parse(this.responseText);
                console.log("JSON Data:", data);

                // Display first user's name
                document.querySelector("#header-id").innerText = data[0].name;
            } else {
                console.error("Error:", this.status);
            }
        }
    };

    xhr.send();
};
//
/*let ajaxXML = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.w3schools.com/xml/note.xml', true);

    // Optional: tell XHR we want XML
    xhr.responseType = 'document'; // 'document' means XML/HTML

    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let xmlDoc = this.responseXML; // parsed XML document
                console.log("XML Data:", xmlDoc);

                // Access specific XML element
                let to = xmlDoc.getElementsByTagName("to")[0].textContent;
                document.querySelector("#header-id").innerText = to;
            } else {
                console.error("Error:", this.status);
            }
        }
    };

    xhr.send();
};*/
