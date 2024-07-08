  var glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    breakpoints:  {
      
      500: {
          perView: 1
      }
  }
  })
  
  glide.mount()




  let isRotated = false; 
  let dropdownVisible = false; 

  function toggleDropdown() {
    let icon = document.getElementById('icon');
    let dropdown = document.getElementById('myDropdown');
    
    
    if (!isRotated) {
      icon.style.transform = 'rotate(180deg)';
    } else {
      icon.style.transform = 'rotate(0deg)'; 
    }
    
    isRotated = !isRotated; 
    
    if (!dropdownVisible) {
      dropdown.classList.add('show');
    } else {
      dropdown.classList.remove('show');
    }
    
    dropdownVisible = !dropdownVisible; 
  }
  function toggleDropdown1() {
    let icon = document.getElementById('icon1');
    let dropdown = document.getElementById('myDropdown1');
    
    if (!isRotated) {
      icon.style.transform = 'rotate(180deg)'; 
    } else {
      icon.style.transform = 'rotate(0deg)'; 
    }
    
    isRotated = !isRotated; 
    
    if (!dropdownVisible) {
      dropdown.classList.add('show');
    } else {
      dropdown.classList.remove('show');
    }
    
    dropdownVisible = !dropdownVisible; 
  }
  
  function toggleDropdown2() {
    let icon = document.getElementById('icon2');
    let dropdown = document.getElementById('myDropdown2');
    
    if (!isRotated) {
      icon.style.transform = 'rotate(180deg)'; 
    } else {
      icon.style.transform = 'rotate(0deg)'; 
    }
    
    isRotated = !isRotated; 
    
    if (!dropdownVisible) {
      dropdown.classList.add('show');
    } else {
      dropdown.classList.remove('show');
    }
    
    dropdownVisible = !dropdownVisible; 
  }
  


 


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("left-nav-mob").style.marginLeft = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("left-nav-mob").style.marginLeft = "0";
    document.getElementById("overlay").style.display = "none";
}

function toggleSearchField() {
  var searchField = document.getElementById("searchField");
  if (searchField.style.display === "block") {
      searchField.style.display = "none";
  } else {
      searchField.style.display = "block";
  }
}