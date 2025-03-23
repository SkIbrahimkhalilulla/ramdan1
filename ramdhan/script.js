document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("LoginForm").addEventListener("submit",function(event){
        event.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if(username ==="ramdan" && password === "WA"){
            
           
                window.location.href="ramdan.html";
            
            
        }else{
            alert("Invalid username or password");
        }
    
    });
    });