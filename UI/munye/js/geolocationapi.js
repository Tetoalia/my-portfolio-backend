
navigator.geolocation.getCurrentPosition(
  (position) => {
      localStorage.removeItem("location")
    localStorage.setItem("location", JSON.stringify({latitude:position.coords.latitude,longitude:position.coords.lo}));
  },
  (error) => {
    console.error(error);
  },
  {
    enableHighAccuracy: true,
    timeout: 4500,
  }
);
