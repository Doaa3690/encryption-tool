function encrypt() {
    const msg = document.getElementById("message").value; // Get the message input
    const method = document.getElementById("method").value; // Get selected method
    let result = ""; // Initialize result variable
  
    if (method === "base64") {
      result = btoa(msg); // Encode to Base64
    } else if (method === "caesar") {
      result = msg.split('').map(c => String.fromCharCode(c.charCodeAt(0) + 3)).join(''); // Shift each letter by 3
    } else if (method === "reverse") {
      result = msg.split('').reverse().join(''); // Reverse the string
    } else if (method === "rot13") {
      result = rot13(msg); // Apply ROT13
    }
  
    document.getElementById("encrypted").innerText = result; // Show encrypted result
  }
  
  function decrypt() {
    const encrypted = document.getElementById("encrypted").innerText; // Get encrypted text
    const method = document.getElementById("method").value; // Get selected method
    let result = ""; // Initialize result variable
  
    if (method === "base64") {
      result = atob(encrypted); // Decode Base64
    } else if (method === "caesar") {
      result = encrypted.split('').map(c => String.fromCharCode(c.charCodeAt(0) - 3)).join(''); // Shift back by 3
    } else if (method === "reverse") {
      result = encrypted.split('').reverse().join(''); // Reverse again
    } else if (method === "rot13") {
      result = rot13(encrypted); // ROT13 again (same function)
    }
  
    document.getElementById("decrypted").innerText = result; // Show decrypted result
  }
  
  // ROT13 cipher: shifts letters by 13 places
  function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(c) {
      let base = c <= 'Z' ? 65 : 97; // Get ASCII base (uppercase or lowercase)
      return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base); // Rotate 13 characters
    });
  }
  