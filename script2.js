// Página de cadastro
// Cadastrar novo produto
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const messageElement = document.getElementById("message");
    messageElement.innerHTML = "Produto cadastrado, aguardando aprovação.";

    // Ocultar a imagem antes de enviar o formulário
    const imagePreview = document.getElementById("image-preview");
    imagePreview.style.display = "block";

    setTimeout(function() {
        messageElement.innerHTML = "";
        document.getElementById("productForm").reset();
        imagePreview.style.display = "none";
        uploadButton.style.display = "block";
    }, 2000);
});


// ENVIAR A IMAGEM

const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("image-preview");
const uploadButton = document.querySelector(".upload-button");

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;
      image.onload = function () {
        const maxWidth = 250; // Defina o tamanho máximo desejado
        const maxHeight = 250; // Defina o tamanho máximo desejado
        
        let width = image.width;
        let height = image.height;
        
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
        
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
        
        image.width = width;
        image.height = height;
        
        uploadButton.style.display = "none"; // Esconde o botão e o texto
        fileInput.style.display = "none"; // Esconde o campo de upload
        
        imagePreview.innerHTML = ""; // Limpa a visualização anterior
        imagePreview.appendChild(image);
      };
    };
    
    reader.readAsDataURL(file);
  }});


  document.addEventListener("DOMContentLoaded", function () {
    const successModal = document.getElementById("success-modal");
    const closeSuccessModal = document.querySelector(".close-success-modal");
  
    // Função para exibir a mensagem de sucesso
    function showSuccessModal() {
      successModal.style.display = "block";
    }
  
    // Função para fechar a mensagem de sucesso
    function closeSuccessModalFunc() {
      successModal.style.display = "none";
    }
  
    // Adiciona um ouvinte de eventos para o botão de fechar
    closeSuccessModal.addEventListener("click", closeSuccessModalFunc);
  
    // Adiciona um ouvinte de eventos para o formulário de produto
    const productForm = document.getElementById("productForm");
    productForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Aqui você pode adicionar a lógica de envio do formulário
  
      // Exemplo: Mostra a mensagem de sucesso após 2 segundos
      setTimeout(showSuccessModal, 2000);
    });
  });
