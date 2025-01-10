const ITEMS_CONTAINER = document.getElementById("items")
const ITEMS_TEMPLATE = document.getElementById("itemTemplate")

function openMap(evt, MapName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(MapName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  let LFdata = ["XM4", "AK-47", "AMES", "GPR91", "Model L", "Goblin MK2", "AS VAL", "Krig", "C9", "KSV", "Tanto .22", "PP-919", "Jakal", "Kompakt", "Saug", "Siren", "Marine", "ASG 89", "PU-21", "XMG", "GPMG", "LW3A1 Frostline", "SVD", "LR 7.62", "9mm PM", "GS45", "Stryder", "Grekhova", "HE-1", "Cigma", "Ray Gun", "Jet Gun", "Mutant Injection", "Chopper gunner", "ARC-XD", "Hellstorm", "Combat knife", "Bat", "Power drill"]
  let List1 = document.getElementById("LFList")

  LFdata.forEach((item) => {
    let li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item;
    checkbox.name = item;
    li.appendChild(checkbox);

    // Create the label
    const label = document.createElement("label");
    label.htmlFor = item;
    label.textContent = item;
    li.appendChild(label);

    List1.appendChild(li);
});



  let Tdata = ["XM4", "AK-47", "AMES", "GPR91", "Model L", "Goblin MK2", "AS VAL", "Krig", "C9", "KSV", "Tanto .22", "PP-919", "Jakal", "Kompakt", "Saug", "Siren", "Marine", "ASG 89", "PU-21", "XMG", "GPMG", "LW3A1 Frostline", "SVD", "LR 7.62", "9mm PM", "GS45", "Stryder", "Grekhova", "HE-1", "Cigma", "Ray Gun", "Beam Smasher", "Mutant Injection", "Chopper gunner", "ARC-XD", "Hellstorm", "Combat knife", "Bat", "Power drill"]
  let List2 = document.getElementById("TList")

  Tdata.forEach((item) => {
    let li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item;
    checkbox.name = item;
    li.appendChild(checkbox);

    // Create the label
    const label = document.createElement("label");
    label.htmlFor = item;
    label.textContent = item;
    li.appendChild(label);

    List2.appendChild(li);
});
   

  
  let CdMdata = ["XM4", "AK-47", "AMES", "GPR91", "Model L", "Goblin MK2", "AS VAL", "Krig", "C9", "KSV", "Tanto .22", "PP-919", "Jakal", "Kompakt", "Saug", "Siren", "Marine", "ASG 89", "PU-21", "XMG", "GPMG", "LW3A1 Frostline", "SVD", "LR 7.62", "9mm PM", "GS45", "Stryder", "Grekhova", "HE-1", "Cigma", "Ray Gun", "Mutant Injection", "Chopper gunner", "ARC-XD", "Hellstorm", "Combat knife", "Bat", "Power drill"]
  let List3 = document.getElementById("CdMList")

  CdMdata.forEach((item) => {
    let li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item;
    checkbox.name = item;
    li.appendChild(checkbox);

    // Create the label
    const label = document.createElement("label");
    label.htmlFor = item;
    label.textContent = item;
    li.appendChild(label);

    List3.appendChild(li);
});

function updateProgressBar(string, progressBarId) {
    const progressBar = document.getElementById(progressBarId);
    const totalItems = string.length;
    let completedItems = 0;
  
    function processItem() {
      if (completedItems < totalItems) {
        // Simulate processing an item (replace with your actual logic)
        setTimeout(() => {
          completedItems++;
          const progress = (completedItems / totalItems) * 100;
          progressBar.style.width = progress + "%";
  
          processItem(); // Process the next item
        });
      }
    }
  
    processItem(); // Start processing the first item
  }

updateProgressBar()