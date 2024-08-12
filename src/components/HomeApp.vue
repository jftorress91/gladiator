<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <h1 class="display-4">Gladiator (2000)</h1>
        <p class="lead">
          Gladiator is a 2000 epic historical drama film directed by Ridley Scott, starring Russell Crowe. The film follows Maximus Decimus Meridius, a Roman general who is betrayed and seeks revenge.
        </p>
        <p>
          <strong>Director:</strong> Ridley Scott <br />
          <strong>Release Date:</strong> May 5, 2000 <br />
          <strong>Genres:</strong> Action, Drama, Adventure <br />
          <strong>Awards:</strong> Won 5 Oscars, including Best Picture and Best Actor.
        </p>
        <router-link to="/informationApp" class="btn btn-secondary mt-3">Learn More</router-link>
      </div>
      <div class="col-md-6">
        <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/russell-crowe-in-gladiator.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5" alt="Gladiator Poster" class="img-fluid rounded" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeApp",
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
.lead {
  font-size: 1.2em;
}
</style>
