<? define('DOC_ROOT_PATH', $_SERVER['DOCUMENT_ROOT'].'/'); ?>
<? include DOC_ROOT_PATH . "templates/header.php"; ?>

<link href="/stylesheets/orderForm.css" rel="stylesheet" type="text/css" />

<body>
  <div class="genericBox">
    <h2>Quick Order Entry</h2>
    <div class="formBox" id="adderBox">
      <label class="column1 row1" for="addNumberOfInputs">How many inputs would you like to add?</label>
      <input class="column1 row2" type="number" name="addNumberOfInputs" id="addNumberOfInputs" placeholder="Number of inputs">
      <button class="column2 row2" type="button" id="addFormInputs" onclick="addFormInputs()">Add</button>

    </div>
    <form id="partNumberForm">
      <div id="partNumberInput" class="genericBox formBox">
        <label for="partNumber">Part Number:</label>
        <input type="text" id="partNumber" name="partNumber" placeholder="Enter Part Number">
        <button class="" type="button" id="removeFormInput" onclick="removeFormInput(this.id)">X</button>
      </div>
        
    </form>
  </div>
</body>

</html>