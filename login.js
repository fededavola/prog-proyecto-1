window.addEventListener("load",function() {

  document.querySelector("form").addEventListener("submit",function(event){
      event.preventDefault()
      var name = document.querySelector("input[name='name']").value
      console.log(name);
      sessionStorage.setItem("nombre",name)
      sessionStorage.getItem("nombre")
      var email = document.querySelector("input[name='email']").value
      console.log(email);
      sessionStorage.setItem("email",email)
      sessionStorage.getItem("email")
      var gender = document.querySelector("select[name='gender']").value
      console.log(gender);
      sessionStorage.setItem("gender",gender)
      sessionStorage.getItem("gender")
  })

})