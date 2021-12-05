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
          
        var docs_json = document.getElementById('3454').textContent;
        var render_items = [{"docid":"b4981d0e-60a6-498c-83f7-64d173683465","root_ids":["2968"],"roots":{"2968":"de5d91d7-79ee-4498-8f2b-a93e7d0b2f55"}}];
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
      names = [html_alliance_pedia, html_horde_pedia, html_male_peida, html_female_pedia, html_alive_peida, html_deceased_peida, html_0_peida,html_1_peida,html_2_peida,html_3_peida,html_4_peida,html_5_peida,html_6_peida, html_U_peida]
    }else{
      names = [html_alliance_head, html_horde_head, html_male_head, html_female_head, html_alive_head, html_deceased_head,html_0_head,html_1_head,html_2_head,html_3_head,html_4_head,html_5_head,html_6_head, html_U_head]
    }
    menu = [dropdown2, dropdown1]
     // code block
     for(let i = 0; i < 2; i++){
     switch(menu[i]) {
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
      case "7":
        // code block
        container.insertAdjacentHTML('afterbegin', names[6]);
        break;
      case "8":
        // code block
        container.insertAdjacentHTML('afterbegin', names[7]);
        break;
      case "9":
        // code block
        container.insertAdjacentHTML('afterbegin', names[8]);
        break;
      case "10":
        // code block
        container.insertAdjacentHTML('afterbegin', names[9]);
        break;
      case "11":
      // code block
        container.insertAdjacentHTML('afterbegin', names[10]);
        break;
      case "12":
        // code block
        container.insertAdjacentHTML('afterbegin', names[11]);
        break;
      case "13":
        // code block
        container.insertAdjacentHTML('afterbegin', names[12]);
        break;
      case "14":
        // code block
        container.insertAdjacentHTML('afterbegin', names[13]);
        break;
      default:
        // code block
    }
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
  

  var html_0_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_com_0.png" title="community 1 wowhead"><img src="assets/images/wowhead/wc_com_0.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_0_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_com_0.png" title="community 1 wowpeida"><img src="assets/images/wowpedia/wc_com_0.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  
  var html_1_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_com_1.png" title="community 2 wowhead"><img src="assets/images/wowhead/wc_com_1.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_1_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_com_1.png" title="community 2 wowpeida"><img src="assets/images/wowpedia/wc_com_1.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_2_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_com_2.png" title="community 3 wowhead"><img src="assets/images/wowhead/wc_com_2.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_2_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_com_2.png" title="community 3 wowpeida"><img src="assets/images/wowpedia/wc_com_2.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_3_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_com_3.png" title="community 4 wowhead"><img src="assets/images/wowhead/wc_com_3.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;

  var html_3_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_com_3.png" title="community 4 wowpeida"><img src="assets/images/wowpedia/wc_com_3.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_4_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_com_4.png" title="community 5 wowhead"><img src="assets/images/wowhead/wc_com_4.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;

  var html_4_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_com_4.png" title="community 5 wowpeida"><img src="assets/images/wowpedia/wc_com_4.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_5_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_com_5.png" title="community 6 wowhead"><img src="assets/images/wowhead/wc_com_5.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;

  var html_5_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_com_5.png" title="community 6 wowpeida"><img src="assets/images/wowpedia/wc_com_5.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;
  var html_6_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_com_6.png" title="community 7 wowhead"><img src="assets/images/wowhead/wc_com_6.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;

  var html_6_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_com_6.png" title="community 7 wowpeida"><img src="assets/images/wowpedia/wc_com_6.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;

  var html_U_head = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowhead/wc_Unknown.png" title="Gender Unknown wowhead"><img src="assets/images/wowhead/wc_Unknown.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;

  var html_U_peida = `
  <div class="col-sm-6 col-md-6 col-lg-6">
  <div class="gallery-item">
    <div class="gallery-image"><a class="gallery" href="assets/images/wowpedia/wc_Unknown.png" title="Gender Unknown wowpeida"><img src="assets/images/wowpedia/wc_Unknown.png">
        <div class="gallery-caption">
          <div class="gallery-icon"><span class="icon-magnifying-glass"></span></div>
        </div></a></div>
  </div>
  </div>
  `;