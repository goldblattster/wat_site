---
layout: default
title: Contact
permalink: /contact/
order: 4
---

## Contact

<form method="post" action="https://young-river-58387.herokuapp.com/contact">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="name_input">Name</label>
      <input type="text" class="form-control" id="name_input" placeholder="Name" name="name" required>
    </div>
    <div class="form-group col-md-6">
      <label for="email_input">Email</label>
      <input type="email" class="form-control" id="email_input" placeholder="Email" name="email" required>
    </div>
    
  </div>
  
  <div class="form-group">
    <label for="subject_input">Subject</label>
    <input type="text" class="form-control" id="subject_input" placeholder="Subject" name="subject" required>
  </div>

  <div class="form-group">
    <label for="body_input">Message</label>
    <textarea class="form-control" id="body_input" name="body" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


<script src="//cdn.ckeditor.com/ckeditor5/12.1.0/classic/ckeditor.js"></script>
<script>
ClassicEditor
        .create( document.querySelector( '#body_input' ) )
        .catch( error => {
            console.error( error );
        } );
</script>


<style>
.ck-editor__editable_inline {
  min-height: 250px;
}
</style>
