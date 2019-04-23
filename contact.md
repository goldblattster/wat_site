---
layout: default
title: Contact
permalink: /contact/
order: 4
---

## Contact

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="name_input">Name</label>
      <input type="text" class="form-control" id="name_input" placeholder="Name">
    </div>
    <div class="form-group col-md-6">
      <label for="email_input">Email</label>
      <input type="email" class="form-control" id="email_input" placeholder="Email">
    </div>
    
  </div>
  
  <div class="form-group">
    <label for="subject_input">Subject</label>
    <input type="text" class="form-control" id="subject_input" placeholder="Subject">
  </div>

  <div class="form-group">
    <label for="body_input">Message</label>
    <textarea class="form-control" rows="5" id="body_input"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>


<script src="//cdn.ckeditor.com/4.11.4/basic/ckeditor.js"></script>
<script>
CKEDITOR.replace( 'body_input' );
</script>
