// Driver Data
const drivers = [
  {
    name: "Rohit Kumar",
    location: "Delhi",
    rating: "⭐ 4.9/5",
    review: "Very polite and punctual driver.",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
    vehicle: "DL 04 AB 1234",
    mobile: "+91 9876543210",
    email: "rohit.kumar@roamvista.co"
  },
  {
    name: "Manish Sharma",
    location: "Mumbai",
    rating: "⭐ 4.8/5",
    review: "Clean cab, smooth ride!",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    vehicle: "DL 01 CD 5678",
    mobile: "+91 9823456789",
    email: "manish.sharma@roamvista.co"
  },
  {
    name: "Arjun Singh",
    location: "Delhi",
    rating: "⭐ 4.7/5",
    review: "Helped with luggage, very friendly.",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    vehicle: "DL 14 XY 4321",
    mobile: "+91 9812345678",
    email: "arjun.singh@roamvista.co"
  },
  {
    name: "Deepak Verma",
    location: "Delhi",
    rating: "⭐ 4.6/5",
    review: "On time and professional service.",
    photo: "https://randomuser.me/api/portraits/men/14.jpg",
    vehicle: "DL 06 LM 9087",
    mobile: "+91 9876547890",
    email: "deepak.verma@roamvista.co"
  },
  {
    name: "Ravi Patel",
    location: "Delhi",
    rating: "⭐ 4.9/5",
    review: "Highly recommended for family trips.",
    photo: "https://randomuser.me/api/portraits/men/19.jpg",
    vehicle: "DL 01 AA 7890",
    mobile: "+91 9898989898",
    email: "ravi.patel@roamvista.co"
  },
  {
    name: "Mohit Yadav",
    location: "Delhi",
    rating: "⭐ 4.8/5",
    review: "Very humble and knowledgeable about routes.",
    photo: "https://randomuser.me/api/portraits/men/27.jpg",
    vehicle: "DL 32 KK 1122",
    mobile: "+91 9012345678",
    email: "mohit.yadav@roamvista.co"
  },
  {
    name: "Amit Mehra",
    location: "Delhi",
    rating: "⭐ 4.5/5",
    review: "Safe driving and good conversation.",
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
    vehicle: "DL 05 MN 6543",
    mobile: "+91 9123456789",
    email: "amit.mehra@roamvista.co"
  },
  {
    name: "Sanjay Reddy",
    location: "Delhi",
    rating: "⭐ 4.7/5",
    review: "Knew all the best shortcuts.",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    vehicle: "DL 07 PQ 2233",
    mobile: "+91 9345678901",
    email: "sanjay.reddy@roamvista.co"
  },
  {
    name: "Harish Bansal",
    location: "Delhi",
    rating: "⭐ 4.8/5",
    review: "Cab was very clean and well maintained.",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    vehicle: "DL 12 ST 4455",
    mobile: "+91 9876501234",
    email: "harish.bansal@roamvista.co"
  },
  {
    name: "Rajeev Nair",
    location: "Delhi",
    rating: "⭐ 5.0/5",
    review: "Best experience ever! Very courteous driver.",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    vehicle: "DL 07 UV 5566",
    mobile: "+91 9876509876",
    email: "rajeev.nair@roamvista.co"
  }
];

// Load cards dynamically
const cabList = document.getElementById('cabList');
drivers.forEach((d, i) => {
  const card = document.createElement('div');
  card.classList.add('cab-card');
  card.innerHTML = `
    <h3>${d.name}</h3>
    <p>📍 ${d.location}</p>
    <p class="rating">${d.rating}</p>
    <p class="review">"${d.review}"</p>
  `;
  card.addEventListener('click', () => showDriverDetails(i));
  cabList.appendChild(card);
});

// Show driver details below
function showDriverDetails(index) {
  const d = drivers[index];
  document.getElementById('driverPhoto').src = d.photo;
  document.getElementById('driverName').innerText = d.name;
  document.getElementById('vehicleNumber').innerText = d.vehicle;
  document.getElementById('driverLocation').innerText = d.location;
  document.getElementById('driverMobile').innerText = d.mobile;
  document.getElementById('driverEmail').innerText = d.email;
  document.getElementById('driverDetails').classList.add('active');
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
