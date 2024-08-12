<template>
  <div class="container my-5">
    <h1>Gladiator - Detailed Information</h1>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Director:</strong> Ridley Scott</li>
      <li class="list-group-item"><strong>Release Date:</strong> May 5, 2000</li>
      <li class="list-group-item"><strong>Cast:</strong></li>
      <ul class="list-group">
        <li class="list-group-item">Russell Crowe as Maximus Decimus Meridius</li>
        <li class="list-group-item">Joaquin Phoenix as Commodus</li>
        <li class="list-group-item">Connie Nielsen as Lucilla</li>
        <li class="list-group-item">Oliver Reed as Proximo</li>
        <li class="list-group-item">Richard Harris as Marcus Aurelius</li>
      </ul>
      <li class="list-group-item"><strong>Awards:</strong> Won 5 Oscars, including Best Picture and Best Actor.</li>
    </ul>

    <!-- Carousel Section -->
    <a-carousel arrows dots-class="slick-dots slick-thumb" class="my-4">
      <template #customPaging="props">
        <a>
          <img :src="images[props.i]" alt="Images" />
        </a>
      </template>
      <div v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Carousel Image" />
      </div>
    </a-carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel } from 'ant-design-vue';

export default defineComponent({
  components: {
    ACarousel: Carousel,
  },
  setup() {
    // Define an array of image URLs
    const images = [
      'https://w0.peakpx.com/wallpaper/267/249/HD-wallpaper-gladiator-maximus-russell-crowe-now-we-are-movie-music-romans-gladiator-rome-classic-entertaiment-actors.jpg',
      'https://boundingintocomics.com/wp-content/uploads/2021/11/2021.11.14-09.40-boundingintocomics-61918257c10e5.jpg?w=788&h=444&crop=1',
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/gladiator.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5',
      'https://www.joblo.com/wp-content/uploads/2023/04/gladiator-russell-crowe.jpg',
    ];
    return {
      images
    }
  },
});
</script>

<style scoped>
:deep(.slick-dots) {
  position: relative;
  height: auto;
}
:deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
:deep(.slick-arrow) {
  display: none !important;
}
:deep(.slick-thumb) {
  bottom: 0px;
}
:deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
:deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}
:deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
