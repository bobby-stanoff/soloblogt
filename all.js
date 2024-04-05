function showImage(input) {
    var reader = new FileReader();
    reader.onload = function(event) {
      var imgElement = document.getElementById('selected-image');
      var deletebutton = document.getElementById('delete-image');
      imgElement.src = event.target.result;
      imgElement.classList.remove('hidden');
      deletebutton.classList.remove('hidden');
    };
    reader.readAsDataURL(input.files[0]);
  }

  
function deleteImage() {
    var imgElement = document.getElementById('selected-image');
    imgElement.src = '';
    imgElement.classList.add('hidden');
    document.getElementById('delete-image').classList.toggle('hidden');
    document.getElementById('cover-image').value = ''; 
  }