//https://web3forms.com/
//"766e15ab-403a-4cae-a18d-c044032d3108"
const form = document.getElementById('contact-form');
const resultDiv = document.getElementById('result');

form.onsubmit = (event) => {
    event.preventDefault();

    //collect all name value pairs from form
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log(json);

    resultDiv.innerHTML = "Please wait ...";

    const url = "https://api.web3forms.com/submit";

    try {
    const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        });

        const result = await response.json();
        console.log(result);

        if (response.status === 200) {
            resultDiv.innerHTML = result.message;
        } else {
            console.log(response);
            resultDiv.innerHTML = result.message;result
        }
    
    }catch(error){
        console.log(error);
        resultDiv.innerHTML = "email not successfully sent";
    }


};


       
