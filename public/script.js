// script.js

async function handleSubmit(event) {
    event.preventDefault();
  
    const jsonTextArea = document.getElementById('jsonTextArea');
    const jsonData = jsonTextArea.value;
    try {
      const response = await sendFormData(jsonData);
      let x=null;
      for (let key in response) {
       x=key+" "+response[key]
      }
      let JsonFormEl=document.getElementById("jsonForm");
      JsonFormEl.style.display="none"
      let resultDiv=document.getElementById("resultDiv");
      resultDiv.textContent=x

    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  }
  
  async function sendFormData(data) {
    const Fetcheddata = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });
    const updateddata = await Fetcheddata.json();
    return updateddata;
  }
  