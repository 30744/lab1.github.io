const element = document.getElementById("id01");
element.innerHTML = "sad";
const cities = [
    { name: "Virginia", population: 8654542 },
    { name: "Virginia-beach", population: 457672 },
    { name: "Richmond", population: 226604 },
    { name: "Norfolk", population: 238832 }
  ];
  
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i].name + " has a population of " + cities[i].population);
  }
  let person = {
    name: "Gulnaz",
    age: 18,
    address: {
      street: "Doswell St",
      city: "Richmond",
      state: "VG"
    }
  };
  console.log(person.name); 
  console.log(person.address.city); 
  console.log(person["age"]); 