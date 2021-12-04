function Download(url) {
    window.location.href = url 
  }
  
function tableToggle1(id) {
  table1 = document.querySelectorAll(".table1 table")
  for (var i = 0; i < table1.length; i++) {
    table1[i].style.display= 'none' 
    document.getElementById(id+"_table").style.display=''
    }

}
function tableToggle2(id) {
  table1 = document.querySelectorAll(".table2 table")
  for (var i = 0; i < table1.length; i++) {
    table1[i].style.display= 'none' 
    document.getElementById(id+"_table").style.display=''
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function NewTab(url) {
  window.open(
    url, "_blank");
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
          
        var docs_json = document.getElementById('3446').textContent;
        var render_items = [{"docid":"6c9741e2-bcbe-485b-bcb3-1b18f3d1847d","root_ids":["2960"],"roots":{"2960":"30d829ad-4430-4951-afe7-06a9be4a1e82"}}];
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
      names = [html_alliance_pedia, html_horde_pedia, html_male_peida, html_female_pedia, html_alive_peida, html_deceased_peida]
    }else{
      names = [html_alliance_head, html_horde_head, html_male_head, html_female_head, html_alive_head, html_deceased_head]
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
      case "5":
      // code block
        container.insertAdjacentHTML('afterbegin', names[4]);
        break;
      case "6":
        // code block
        container.insertAdjacentHTML('afterbegin', names[5]);
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
      case "5":
        // code block
          container.insertAdjacentHTML('afterbegin', names[4]);
          break;
      case "6":
        // code block
        container.insertAdjacentHTML('afterbegin', names[5]);
        break;
      default:
        // code block
    }
  }

  var html_alliance_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Alliance.png" title="Alliance wowhead"><img src="assets/images/wowhead/wc_Alliance.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  
  var html_alliance_pedia = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Alliance.png" title="Alliance wowpedia"><img src="assets/images/wowpedia/wc_Alliance.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  
  var html_horde_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Horde.png" title="Horde wowhead"><img src="assets/images/wowhead/wc_Horde.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_horde_pedia = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Horde.png" title="Horde wowpedia"><img src="assets/images/wowpedia/wc_Horde.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  
  var html_female_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Female.png" title="Female wowhead"><img src="assets/images/wowhead/wc_Female.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_female_pedia = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Female.png" title="Female wowpedia"><img src="assets/images/wowpedia/wc_Female.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_male_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Male.png" title="Male wowhead"><img src="assets/images/wowhead/wc_Male.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_male_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Male.png" title="Male wowpeida"><img src="assets/images/wowpedia/wc_Male.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_alive_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Alive.png" title="Alive wowhead"><img src="assets/images/wowhead/wc_Alive.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_alive_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Alive.png" title="Alive wowpeida"><img src="assets/images/wowpedia/wc_Alive.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  
  var html_deceased_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Deceased.png" title="Deceased wowhead"><img src="assets/images/wowhead/wc_Deceased.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_deceased_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Deceased.png" title="Deceased wowpeida"><img src="assets/images/wowpedia/wc_Deceased.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  