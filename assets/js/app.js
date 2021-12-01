function Download(url) {
    window.location.href = url 
  }
  

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function customScroll(inputid, offset){
const id = inputid;
const yOffset = offset; 
const element = document.getElementById(id);
const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

window.scrollTo({top: y, behavior: 'smooth'});
}

function updateWcSelection(){
  const container = document.querySelector('#wc_container');
  removeAllChildNodes(container);

  var WC_dropdown_1 = document.getElementById("WC_dropdown_1");
  var WC_dropdown_1_value = WC_dropdown_1.value;
  var WC_dropdown_2 = document.getElementById("WC_dropdown_2");
  var WC_dropdown_2_value = WC_dropdown_2.value;
  var WC_wow = document.getElementById("WC_wow");
  var WC_wow_value = WC_wow.value;
     
  switch(WC_wow_value) {
    case "1":
      internalSwitch("pedia", WC_dropdown_2_value, WC_dropdown_1_value, container)
      break;
    case "2":
      internalSwitch("head", WC_dropdown_2_value, WC_dropdown_1_value, container)
      break;
    case "3":
      internalSwitch("pedia", WC_dropdown_2_value, WC_dropdown_1_value, container)
      internalSwitch("head", WC_dropdown_2_value, WC_dropdown_1_value, container)
      break;
    default:
  }
}


  
(function() {
  var fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
          
        var docs_json = document.getElementById('2957').textContent;
        var render_items = [{"docid":"bcf5e7cf-d0f7-48f2-b98a-b9c9f6d05378","root_ids":["2471"],"roots":{"2471":"c82e5c0b-cbca-49f1-aed5-1099ef419751"}}];
        root.Bokeh.embed.embed_items(docs_json, render_items);
      
        }
        if (root.Bokeh !== undefined) {
          embed_document(root);
        } else {
          var attempts = 0;
          var timer = setInterval(function(root) {
            if (root.Bokeh !== undefined) {
              clearInterval(timer);
              embed_document(root);
            } else {
              attempts++;
              if (attempts > 100) {
                clearInterval(timer);
                console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
              }
            }
          }, 10, root)
        }
      })(window);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();


  function internalSwitch(select, dropdown2, dropdown1, container){
    if(select != "head"){
      names = [html_alliance_pedia, html_horde_pedia, html_male_peida, html_female_pedia]
    }else{
      names = [html_alliance_head, html_horde_head, html_male_head, html_female_head]
    }
     // code block
     switch(dropdown2) {
      case "1":
        // code block
        container.insertAdjacentHTML('afterbegin', names[0]);
        break;
      case "2":
        // code block
        container.insertAdjacentHTML('afterbegin', names[1]);
        break;
      case "3":
        // code block
        container.insertAdjacentHTML('afterbegin', names[2]);
        break;
      case "4":
        // code block
        container.insertAdjacentHTML('afterbegin', names[3]);
        break;
      default:
        // code block
    }
     switch(dropdown1) {
      case "1":
        // code block
        container.insertAdjacentHTML('afterbegin',  names[0]);
        break;
      case "2":
        // code block
        container.insertAdjacentHTML('afterbegin',  names[1]);
        break;
      case "3":
        // code block
        container.insertAdjacentHTML('afterbegin',  names[2]);
        break;
      case "4":
        // code block
        container.insertAdjacentHTML('afterbegin',  names[3]);
        break;
      default:
        // code block
    }
  }

  var html_alliance_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Alliance.png" title="Title 1"><img src="assets/images/wowhead/wc_Alliance.png" alt="Gallery Image 1">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  
  var html_alliance_pedia = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Alliance.png" title="Title 3"><img src="assets/images/wowpedia/wc_Alliance.png" alt="Gallery Image 3">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  
  var html_horde_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Horde.png" title="Title 2"><img src="assets/images/wowhead/wc_Horde.png" alt="Gallery Image 2">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_horde_pedia = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Horde.png" title="Title 4"><img src="assets/images/wowpedia/wc_Horde.png" alt="Gallery Image 4">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  
  var html_female_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Female.png" title="Title 5"><img src="assets/images/wowhead/wc_Female.png" alt="Gallery Image 5">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_female_pedia = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Female.png" title="Title 7"><img src="assets/images/wowpedia/wc_Female.png" alt="Gallery Image 7">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_male_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Male.png" title="Title 6"><img src="assets/images/wowhead/wc_Male.png" alt="Gallery Image 6">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_male_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Male.png" title="Title 8"><img src="assets/images/wowpedia/wc_Male.png" alt="Gallery Image 8">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  
  