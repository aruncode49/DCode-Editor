// make run function for output
function run()
{
    // first access all the textarea and output area
    const htmlCode = document.getElementById("html").value;
    const cssCode = document.getElementById("css").value;
    const jsCode = document.getElementById("js").value;
    const output = document.getElementById("output");

    // now display all data in output iframe which created a another html file
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}

setTimeout(function() {
    document.querySelector('#html-transition').classList.add('active');
  }, 600);

setTimeout(function() {
    document.querySelector('#css-transition').classList.add('active');
  }, 700);

setTimeout(function() {
    document.querySelector('#js-transition').classList.add('active');
  }, 800);

setTimeout(function() {
    document.querySelector('#output-transition').classList.add('active');
  }, 900);
