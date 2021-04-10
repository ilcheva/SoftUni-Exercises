function solve() {
   let message = document.getElementById("chat_input");
   let chatOutput = document.getElementById("chat_messages")
   
   let btn = document.querySelector("button#send");
   btn.addEventListener("click", (e) => {
      let messageInput = message.value;
      let newLine = document.createElement('div');
      newLine.className = "message my-message";
      newLine.textContent = messageInput;
      chatOutput.appendChild(newLine); 
      message.value='';  

   })


}

