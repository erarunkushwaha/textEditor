/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea : DONE
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked :Done
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked :Done
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText(){
    // CODE GOES HERE
    let text  = document.getElementById('text-input').value;
    document.getElementById('text-output').innerText = text;
  }

  function updateArea() {
    let area = document.querySelector('#text-input');
    let height = area.style.height;
     document.querySelector('#text-output').style.height = height;
  }

  function getFontValue(elem){
    let e = document.getElementById("select");
    let value = e.options[e.selectedIndex].value;
     document.getElementById('text-output').style.fontSize = `${value}px`;
  }
  
  function listFontSize(){     
    for(let x=1;x<=20;x++){
    var option = "<option value='" + x + "'>" + x + "</option>"
    document.getElementById('select').innerHTML += option;   
    }  
} 

  /**
   * Toggle the bold class for the output text
   * HINT: Use the onclick function insite HTML
   * HINT: Look into using this keyword
   * HINT: Use the classList property
   * HINT: Toggle .active class for the button
   */
  function makeBold(elem){
    //CODE GOES HERE
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('bold');
 
  }
  
  /**
   * Toggle the italic class for the output text
   */
  function makeItalic(elem){
    elem.classList.toggle('active')
   // document.getElementById('text-output').classList.toggle('italic');
   let output = document.getElementById('text-output');
   if(output.classList.contains('italic')){
    output.classList.remove('italic');
   } else {
    output.classList.add('italic');
   }
  }
  
  /**
   * Toggle the underline class for the output text
   * HINT: Toggle the .active class for the button
   * HINT: Use the classList property
   * HINT: Use contains, remove, and add functions
   */
  function makeUnderline(elem){
      //CODE GOES HERE
      elem.classList.toggle('active');
   let output = document.getElementById('text-output');
      document.getElementById('text-output').classList.toggle('underline');
    //   if(output.classList.contains('underline')){
    //       output.classList.remove('underline');
    //   } else {
    //       output.classList.add('underline');
    //   }
  }
  
  /**
   * Toggle the style textAlign attribute
   * Toggle the active state for the align butttons
   * HINT: Use the style property of the element
   * HINT: Make sure to untoggle the active state for all other align buttons
   */
  function alignText(elem, alignType){
      document.getElementById('text-output').style.textAlign = alignType;
    let allignButton = document.getElementsByClassName('align');
    for(let i = 0; i < allignButton.length; i++ ){
        allignButton[i].classList.remove('active');
    }
    elem.classList.toggle('active');
  }