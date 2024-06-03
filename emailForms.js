document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("SoRHF39bLj4nCDGM3");

    var myForm = document.getElementById('my-form');
    
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        emailjs.sendForm('service_bow0via', 'template_hoejyce', this)
            .then(function() {
                alert('Mensagem enviada com sucesso!');
                myForm.reset(); 
            }, function(error) {
                alert('Erro ao enviar a mensagem: ', error);
            });
    });
});
