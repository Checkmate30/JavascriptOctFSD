async function fetchMovie() {
  try {
    const options = {
      method: "GET",

      headers: {
        accept: "application/json",

        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjVhNDYzODY1MTg1M2Y2Yzc1ZDI4YTZlNmI4YmVkZSIsInN1YiI6IjY0OTFkNzQ3MmY4ZDA5MDBhZDM2OWJhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pAP3Sn_nkmxcXwEgBMpV_b3k5Y9YjhRp0OJQeO46Ydw",
      },
    };

    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;

    const response = await fetch(url, options);

    const data = await response.json();

    console.log(data, "data debug");
  } catch (error) {
    console.log("error iss here");
  }
}

fetchMovie();
